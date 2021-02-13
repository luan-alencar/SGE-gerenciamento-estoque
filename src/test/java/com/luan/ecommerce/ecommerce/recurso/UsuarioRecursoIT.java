package com.luan.ecommerce.ecommerce.recurso;

import com.luan.ecommerce.ecommerce.builder.UsuarioBuilder;
import com.luan.ecommerce.ecommerce.dominio.Usuario;
import com.luan.ecommerce.ecommerce.repositorio.UsuarioRepositorio;
import com.luan.ecommerce.ecommerce.servico.mapper.UsuarioMapper;
import com.luan.ecommerce.ecommerce.utills.IntTestComum;
import org.apache.http.util.Asserts;
import org.junit.Assert;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.transaction.annotation.Transactional;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@Transactional
@ExtendWith(SpringExtension.class)
public class UsuarioRecursoIT extends IntTestComum {

    @Autowired
    private UsuarioBuilder usuarioBuilder;

    @Autowired
    private UsuarioRepositorio usuarioRepositorio;

    @Autowired
    private UsuarioMapper usuarioMapper;

//    @BeforeEach
//    public void inicializar() {
//        usuarioRepositorio.deleteAll();
//    }

    @Test
    void listarTest() throws Exception {
        Usuario usuario = usuarioBuilder.construir();
        usuarioBuilder.persistir(usuario);

        getMockMvc().perform(get("/api/usuarios"))
                .andExpect(status().isOk());
        Assert.assertEquals(1, usuarioRepositorio.findAll().size());
    }

    @Test
    public void listarNullTest() throws Exception {
        getMockMvc().perform(get("/api/usuarios"))
                .andExpect(status().isOk());
    }

    @Test
    public void buscarPorIdTest() throws Exception{
        Usuario usuario = usuarioBuilder.construir();

        getMockMvc().perform(get("/api/usuarios/", usuario.getId()))
                .andExpect(status().isOk());
    }
}
