package com.luan.ecommerce.ecommerce.recurso;

import com.luan.ecommerce.ecommerce.builder.UsuarioBuilder;
import com.luan.ecommerce.ecommerce.dominio.Usuario;
import com.luan.ecommerce.ecommerce.repositorio.UsuarioRepositorio;
import com.luan.ecommerce.ecommerce.servico.mapper.UsuarioMapper;
import com.luan.ecommerce.ecommerce.utills.IntTestComum;
import com.luan.ecommerce.ecommerce.utills.TestUtil;
import org.junit.Assert;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@Transactional
@RunWith(SpringRunner.class)
public class UsuarioRecursoIT extends IntTestComum {

    @Autowired
    private UsuarioBuilder usuarioBuilder;

    @Autowired
    private UsuarioRepositorio usuarioRepositorio;

    @Autowired
    private UsuarioMapper usuarioMapper;

    @BeforeEach
    public void inicializar() {
        usuarioRepositorio.deleteAll();
    }

    @Test
    void listarTest() throws Exception {
        usuarioBuilder.construir();

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
    public void buscarPorIdTest() throws Exception {
        Usuario usuario = usuarioBuilder.construir();

        getMockMvc().perform(get("/api/usuarios/", usuario.getId()))
                .andExpect(status().isOk());
    }

    @Test
    public void buscarPorCpfTest() throws Exception {
        Usuario usuario = usuarioBuilder.construir();

        getMockMvc().perform(get("/api/usuarios/cpf/{cpf}", usuario.getCpf()))
                .andExpect(status().isOk());
    }

    @Test
    public void buscarPorRgTest() throws Exception {
        Usuario usuario = usuarioBuilder.construir();

        getMockMvc().perform(get("/api/usuarios/rg/{rg}", usuario.getRg()))
                .andExpect(status().isOk());
    }

    @Test
    public void buscarPorEmailTest() throws Exception {
        Usuario usuario = usuarioBuilder.construir();

        getMockMvc().perform(get("/api/usuarios/email/{email}", usuario.getEmail()))
                .andExpect(status().isOk());
    }

    @Test
    public void salvarTest() throws Exception {
        Usuario usuario = usuarioBuilder.construirEntidade();

        getMockMvc().perform(post("/api/usuarios")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(usuarioMapper.toDto(usuario))))
                .andExpect(status().isCreated());

        Assert.assertEquals(1, usuarioRepositorio.findAll().size());
    }

    @Test
    public void editarTest() throws Exception {
        Usuario usuario = usuarioBuilder.construir();
        usuario.setNome("Alterando usuario");
        usuario.setEmail("test2@gmail.com");
        usuario.setCpf("234231234");
        usuario.setRg("232345234");
        usuario.setDataNascimento(LocalDate.of(1970, 01, 02));

        getMockMvc().perform(put("/api/usuarios")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(usuarioMapper.toDto(usuario))))
                .andExpect(status().isOk());
    }

    @Test
    void removerTest() throws Exception {
        Usuario usuario = usuarioBuilder.construir();

        getMockMvc().perform(delete("/api/usuarios/" + usuario.getId()))
                .andExpect(status().isOk());

        Assert.assertEquals(0, usuarioRepositorio.findAll().size());
    }
}
