package com.luan.ecommerce.ecommerce.builder;

import com.luan.ecommerce.ecommerce.dominio.Categoria;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.util.Collection;

@Component
public class CategoriaBuilder extends ConstrutorDeEntidade<Categoria> {

    @Override
    protected Categoria construirEntidade() throws ParseException {
        Categoria categoria = new Categoria();
        categoria.setId(1);
        categoria.setDescricao("Em estoque");

        return categoria;
    }

    @Override
    protected Categoria persistir(Categoria entidade) {
        return entidade;
    }

    @Override
    protected Collection<Categoria> obterTodos() {
        return null;
    }

    @Override
    protected Categoria obterPorId(Integer id) {
        return null;
    }
}
