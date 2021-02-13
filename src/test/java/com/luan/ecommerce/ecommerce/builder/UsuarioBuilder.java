package com.luan.ecommerce.ecommerce.builder;

import com.luan.ecommerce.ecommerce.dominio.Usuario;
import com.luan.ecommerce.ecommerce.servico.UsuarioServico;
import com.luan.ecommerce.ecommerce.servico.dto.UsuarioDTO;
import com.luan.ecommerce.ecommerce.servico.mapper.UsuarioMapper;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.test.context.junit4.SpringRunner;

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
        usuario.setId(1);
        usuario.setNome("test1");
        usuario.setCpf("58296536056");
        usuario.setEmail("test@test.com");
        usuario.setRg("31231222");
        usuario.setDataNascimento(LocalDate.of(1996, 11, 10));
        usuario.setTipoUsuario(null);
        return usuario;
    }

    @Override
    public Usuario persistir(Usuario entidade) {
        usuarioServico.salvar(usuarioMapper.toDto(entidade));
        return entidade;
    }

    @Override
    public Collection<Usuario> obterTodos() {
        List<UsuarioDTO> listaDTO = usuarioServico.listar();
        List<Usuario> listaDominio = usuarioMapper.toEntity(listaDTO);
        return listaDominio;
    }

    @Override
    public Usuario obterPorId(Integer id) {
        return usuarioMapper.toEntity(usuarioServico.buscarPorId(id));
    }
}
