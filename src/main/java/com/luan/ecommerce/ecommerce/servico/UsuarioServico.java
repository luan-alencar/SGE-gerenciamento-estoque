package com.luan.ecommerce.ecommerce.servico;

import com.luan.ecommerce.ecommerce.dominio.Usuario;
import com.luan.ecommerce.ecommerce.repositorio.UsuarioRepositorio;
import com.luan.ecommerce.ecommerce.servico.dto.EmailDTO;
import com.luan.ecommerce.ecommerce.servico.dto.UsuarioDTO;
import com.luan.ecommerce.ecommerce.servico.mapper.UsuarioMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UsuarioServico {

    private final UsuarioRepositorio usuarioRepositorio;
    private final UsuarioMapper usuarioMapper;
    private final ProdutorServico produtorServico;

    public List<UsuarioDTO> listar() {
        return usuarioMapper.toDto(usuarioRepositorio.findAll());
    }

    public UsuarioDTO buscarPorId(Integer idUsuario) {
        return usuarioMapper.toDto(usuarioRepositorio.findById(idUsuario)
                .orElseThrow(() -> new RuntimeException("Usuário não existe!")));
    }

    public UsuarioDTO buscarPorCpf(String cpf) {
        return usuarioMapper.toDto(usuarioRepositorio.findByCpf(cpf));
    }

    public UsuarioDTO buscarPorEmail(String email) {
        return usuarioMapper.toDto(usuarioRepositorio.findByEmail(email));
    }

    public UsuarioDTO buscarPorRg(String rg) {
        return usuarioMapper.toDto(usuarioRepositorio.findByRg(rg));
    }

    public UsuarioDTO salvar(UsuarioDTO usuarioDTO) {
        usuarioDTO.setTipoUsuario(false);
        Usuario usuario = usuarioMapper.toEntity(usuarioDTO);
        validarDadosNull(usuarioDTO);
        validarIdade(usuarioDTO);
        validarCpf(usuarioDTO);
        validarEmail(usuarioDTO);
        enviarEmailCadastro(usuario);
        usuarioRepositorio.save(usuario);
        return usuarioMapper.toDto(usuario);
    }

    public UsuarioDTO editar(UsuarioDTO usuarioDTO) throws RuntimeException {
        return usuarioMapper.toDto(usuarioRepositorio.save(usuarioMapper.toEntity(usuarioDTO)));
    }

    public void remover(Integer id) {
        usuarioRepositorio.delete(usuarioRepositorio.findById(id)
                .orElseThrow(() -> new RuntimeException("Id informado não encontrado")));
    }

    // Métodos privados de validacao

    // Metodo com servico de mensageria
    private void enviarEmailCadastro(Usuario usuario) {
        EmailDTO emailDTO = new EmailDTO();
        emailDTO.setAssunto("Cadastro de usuário");
        emailDTO.setCorpo("<h1> Você foi cadastrado com sucesso na plataforma</h1>!");
        emailDTO.setDestinatario(usuario.getEmail());
        emailDTO.setCopias(new ArrayList<>());
        emailDTO.getCopias().add(emailDTO.getDestinatario());
        this.produtorServico.enviarEmail(emailDTO);
    }


    private void validarDadosNull(UsuarioDTO usuario) {
        if (usuario.getNome() == null) {
            throw new RuntimeException("Nome de usuário não informado");
        }

        if (usuario.getCpf() == null) {
            throw new RuntimeException("Cpf não informado");
        }

        if (usuario.getEmail() == null) {
            throw new RuntimeException("E-mail não informado");
        }

        if (usuario.getDataNascimento() == null) {
            throw new RuntimeException("Data de nascimento não informada");
        }
    }

    private void validarIdade(UsuarioDTO usuario) {
        int idade = LocalDate.now().getYear() - usuario.getDataNascimento().getYear();
        if (idade > 115 || idade < 10) {
            throw new RuntimeException("Data de nascimento inválida");
        }
    }

    private Usuario obter(Integer id) {
        return usuarioRepositorio.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
    }

    private void validarEmail(UsuarioDTO usuarioDTO) {
        Usuario usuario = usuarioRepositorio.findByEmail(usuarioDTO.getEmail());
        if (usuario != null && !usuario.getId().equals(usuarioDTO.getId())) {
            throw new RuntimeException("Email já cadastrado");
        }
    }

    private void validarCpf(UsuarioDTO usuarioDTO) {
        Usuario usuario = usuarioRepositorio.findByCpf(usuarioDTO.getCpf());
        if (usuario != null && !usuario.getId().equals(usuarioDTO.getId())) {
            throw new RuntimeException("CPF já cadastrado");
        }
    }
}
