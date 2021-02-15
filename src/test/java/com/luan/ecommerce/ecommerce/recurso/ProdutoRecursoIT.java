package com.luan.ecommerce.ecommerce.recurso;

import com.luan.ecommerce.ecommerce.builder.ProdutoBuilder;
import com.luan.ecommerce.ecommerce.repositorio.ProdutoRepositorio;
import com.luan.ecommerce.ecommerce.utills.IntTestComum;
import org.junit.Assert;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import javax.transaction.Transactional;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@Transactional
@ExtendWith(SpringExtension.class)
public class ProdutoRecursoIT extends IntTestComum {

    @Autowired
    private ProdutoBuilder produtoBuilder;

    @Autowired
    private ProdutoRepositorio produtoRepositorio;

    @BeforeEach
    void inicializar() {
        produtoRepositorio.deleteAll();
    }

    @Test
    void listarTest() throws Exception {
        produtoBuilder.construir();

        getMockMvc().perform(get("/api/produtos/"))
                .andExpect(status().isOk());
        Assert.assertEquals(1, produtoRepositorio.findAll().size());
    }
}
