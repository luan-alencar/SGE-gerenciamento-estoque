package com.luan.ecommerce.ecommerce.recurso;

import com.luan.ecommerce.ecommerce.builder.CategoriaBuilder;
import com.luan.ecommerce.ecommerce.dominio.Categoria;
import com.luan.ecommerce.ecommerce.utills.IntTestComum;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import javax.transaction.Transactional;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@Transactional
@ExtendWith(SpringExtension.class)
public class CategoriaRecursoIT extends IntTestComum {

    @Autowired
    private CategoriaBuilder categoriaBuilder;

    @Test
    void listarCategoriasTest() throws Exception {
        categoriaBuilder.construir();

        getMockMvc().perform(get("/api/categorias/"))
                .andExpect(status().isOk());
    }

    @Test
    void buscarCategoriaPorIdTest() throws Exception {
        Categoria categoria = categoriaBuilder.construir();

        getMockMvc().perform(get("/api/categorias/", categoria.getId()))
                .andExpect(status().isOk());
        Assert.assertEquals("Em estoque", categoria.getDescricao());
    }
}
