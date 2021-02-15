package com.luan.ecommerce.ecommerce.builder;

import com.luan.ecommerce.ecommerce.dominio.Usuario;
import com.luan.ecommerce.ecommerce.servico.UsuarioServico;
import com.luan.ecommerce.ecommerce.servico.dto.UsuarioDTO;
import com.luan.ecommerce.ecommerce.servico.mapper.UsuarioMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.time.LocalDate;
import java.util.Collection;
import java.util.List;

@Component
public class UsuarioBuilder extends ConstrutorDeEntidade<Usuario> {

    @Autowired
    private UsuarioServico usuarioServico;

    @Autowired
    private UsuarioMapper usuarioMapper;

    @Override
    public Usuario construirEntidade() throws ParseException {
        Usuario usuario = new Usuario();
        usuario.setNome("test1");
        usuario.setCpf("58296536056");
        usuario.setEmail("test@test.com");
        usuario.setRg("31231222");
        usuario.setDataNascimento(LocalDate.of(1996, 11, 10));
        usuario.setTipoUsuario(false);

        return usuario;
    }

    @Override
    protected Usuario persistir(Usuario entidade) {
        usuarioServico.salvar(usuarioMapper.toDto(entidade));
        return entidade;
    }

    @Override
    protected Collection<Usuario> obterTodos() {
        List<UsuarioDTO> listaDTO = usuarioServico.listar();
        List<Usuario> listaDominio = usuarioMapper.toEntity(listaDTO);
        return listaDominio;
    }

    @Override
    protected Usuario obterPorId(Integer id) {
        return usuarioMapper.toEntity(usuarioServico.buscarPorId(id));
    }
}
