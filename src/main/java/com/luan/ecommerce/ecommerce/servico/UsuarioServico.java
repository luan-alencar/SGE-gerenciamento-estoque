package com.luan.ecommerce.ecommerce.servico;

import com.luan.ecommerce.ecommerce.dominio.Usuario;
import com.luan.ecommerce.ecommerce.repositorio.UsuarioRepositorio;
import com.luan.ecommerce.ecommerce.servico.dto.ChaveDTO;
import com.luan.ecommerce.ecommerce.servico.dto.EmailDTO;
import com.luan.ecommerce.ecommerce.servico.dto.UsuarioDTO;
import com.luan.ecommerce.ecommerce.servico.exception.RegraDeNegocioException;
import com.luan.ecommerce.ecommerce.servico.mapper.UsuarioMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UsuarioServico {

    private final UsuarioRepositorio usuarioRepositorio;
    private final UsuarioMapper usuarioMapper;
    private static final LocalDate DIA_DE_HOJE = LocalDate.now();
    private final ProdutorServico produtorServico;

    public List<UsuarioDTO> listar() {
        return usuarioMapper.toDto(usuarioRepositorio.findAll());
    }

    public UsuarioDTO buscarPorId(Integer idUsuario) {
        return usuarioMapper.toDto(usuarioRepositorio.findById(idUsuario)
                .orElseThrow(() -> new RegraDeNegocioException("Usuário não existe!")));
    }

    public UsuarioDTO obterPorChave(ChaveDTO chaveDTO) {
        Usuario usuario = usuarioRepositorio.findByChave(chaveDTO.getChave());
        if (usuario == null) {
            throw new RegraDeNegocioException("Não foi possível encontrar a chave informada");
        }
        return usuarioMapper.toDto(usuario);
    }

    public void criarEmailCadastro(String email, String chave) {

        EmailDTO emailDTO = new EmailDTO();
        emailDTO.setAssunto("Cadastro SGE");
        emailDTO.setCorpo("Parabéns você se cadastrou no SGE com SUCESSO! Sua chave é " + chave);
        emailDTO.setDestinatario(email);
        emailDTO.setCopias(new ArrayList<>());
        emailDTO.getCopias().add(emailDTO.getDestinatario());
        this.produtorServico.enviarEmail(emailDTO);
    }


    public UsuarioDTO salvar(UsuarioDTO usuarioDTO) {
        usuarioDTO.setAdmin(false);
        validarDadosEdicao(usuarioDTO);
        Usuario usuario = verificarPost(usuarioDTO);
        usuario = usuarioRepositorio.save(usuario);
        criarEmailCadastro(usuario.getEmail(), usuario.getChave());
        return usuarioMapper.toDto(usuario);
    }

    public Usuario verificarPost(UsuarioDTO usuarioDTO) {

        if (!usuarioRepositorio.findByEmail(usuarioDTO.getEmail()).isEmpty()) {
            throw new RegraDeNegocioException("O email já foi cadastrado");
        }

        if (!usuarioRepositorio.findByCpf(usuarioDTO.getCpf()).isEmpty()) {
            throw new RegraDeNegocioException("Cpf já cadastrado");
        }

        //EXCEPTION IDADE ERRADA (OBS: EVENTUALMENTE MUDAR PARA LOCALDATE)
        if (usuarioDTO.getDataNascimento().isAfter(DIA_DE_HOJE)) {
            throw new RegraDeNegocioException("Data de nascimento invalida");
        }

        Usuario usuario = usuarioMapper.toEntity(usuarioDTO);
        usuario.setChave(UUID.randomUUID().toString());
        return usuario;
    }


    public UsuarioDTO editar(UsuarioDTO usuarioDTO) throws RegraDeNegocioException {
        return usuarioMapper.toDto(usuarioRepositorio.save(usuarioMapper.toEntity(usuarioDTO)));
    }

    public void remover(Integer id) {
        usuarioRepositorio.delete(usuarioRepositorio.findById(id)
                .orElseThrow(() -> new RegraDeNegocioException("Id informado não encontrado")));
    }

    // Métodos privados de validacao

    // Metodo com servico de mensageria
    private void enviarEmailCadastro(Usuario usuario, String chave) {
        EmailDTO emailDTO = new EmailDTO();
        emailDTO.setAssunto("Cadastro de Funcionário");
        emailDTO.setCorpo("<h1> Você foi cadastrado na plataforma</h1>! Sua chave de acesso: " + chave);
        emailDTO.setDestinatario(usuario.getEmail());
        emailDTO.setCopias(new ArrayList<>());
        emailDTO.getCopias().add(emailDTO.getDestinatario());
        this.produtorServico.enviarEmail(emailDTO);
    }

    private Usuario validarDadosCadastrais(UsuarioDTO usuarioDTO) {
        if (!usuarioRepositorio.findByEmail(usuarioDTO.getEmail()).isEmpty()) {
            throw new RegraDeNegocioException("O email já foi cadastrado");
        }

        if (!usuarioRepositorio.findByCpf(usuarioDTO.getCpf()).isEmpty()) {
            throw new RegraDeNegocioException("Cpf já cadastrado");
        }

        //EXCEPTION IDADE ERRADA (OBS: EVENTUALMENTE MUDAR PARA LOCALDATE)
        if (usuarioDTO.getDataNascimento().isAfter(LocalDate.now())) {
            throw new RegraDeNegocioException("Data de nascimento invalida");
        }

        Usuario usuario = usuarioMapper.toEntity(usuarioDTO);
        usuario.setChave(UUID.randomUUID().toString());
        return usuario;
    }

    private void validarDadosNull(UsuarioDTO usuario) {
        if (usuario.getNome() == null) {
            throw new RegraDeNegocioException("Nome de usuário não informado");
        }

        if (usuario.getCpf() == null) {
            throw new RegraDeNegocioException("Cpf não informado");
        }

        if (usuario.getEmail() == null) {
            throw new RuntimeException("E-mail não informado");
        }

        if (usuario.getDataNascimento() == null) {
            throw new RegraDeNegocioException("Data de nascimento não informada");
        }
    }

    private void validarIdade(UsuarioDTO usuario) {
        int idade = LocalDate.now().getYear() - usuario.getDataNascimento().getYear();
        if (idade > 115 || idade < 10) {
            throw new RegraDeNegocioException("Data de nascimento inválida");
        }
    }

    private Usuario obter(Integer id) {
        return usuarioRepositorio.findById(id)
                .orElseThrow(() -> new RegraDeNegocioException("Usuário não encontrado"));
    }

    public Usuario validarDadosEdicao(UsuarioDTO usuarioDTO) {

        Usuario usuario = usuarioRepositorio.findById(usuarioDTO.getId())
                .orElseThrow(() -> new RegraDeNegocioException("Usuario não existe"));

        //CRIA LISTAS ONDE INSTANCIAS COM O MESMO CPF OU EMAIL DO DTO, REMOVENDO O USUARIO QUE VAI SER MODIFICADO//
        List<Usuario> listaCpf = usuarioRepositorio.findByCpf(usuarioDTO.getCpf());
        List<Usuario> listaEmail = usuarioRepositorio.findByEmail(usuarioDTO.getEmail());
        //REMOVE USUARIO
        listaCpf.remove(usuario);
        listaEmail.remove(usuario);

        // VERIFICAR CPF NULL

        if (usuarioDTO.getCpf() == null) {
            throw new RegraDeNegocioException("CPF Nulo");
        }

        if (usuarioDTO.getDataNascimento() == null) {
            throw new RegraDeNegocioException("Data de nascimento nula.");
        }

        if (usuarioDTO.getEmail() == null) {
            throw new RegraDeNegocioException("Email nulo");
        }

        if (usuarioDTO.getNome() == null) {
            throw new RegraDeNegocioException("Nome nulo");
        }

        if (!listaEmail.isEmpty()) {
            throw new RegraDeNegocioException("Email já cadastrado");
        }

        if (!listaCpf.isEmpty()) {
            throw new RegraDeNegocioException("CPF já cadastrado");
        }

        // EXCEPTION CPF INVALIDO
        if (usuarioDTO.getCpf().length() != 14) {
            throw new RegraDeNegocioException("CPF invalido");
        }

        //EXCEPTION IDADE ERRADA

        if (usuarioDTO.getDataNascimento().isAfter(LocalDate.now())) {
            throw new RegraDeNegocioException("Data de nascimento invalida.");
        }

        Usuario usuarioTemp = usuarioMapper.toEntity(usuarioDTO);
        usuarioTemp.setChave(usuario.getChave());
        return usuarioTemp;
    }

}
