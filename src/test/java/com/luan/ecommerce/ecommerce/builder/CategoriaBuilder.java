package com.luan.ecommerce.ecommerce.builder;

import com.luan.ecommerce.ecommerce.dominio.Categoria;
import com.luan.ecommerce.ecommerce.servico.CategoriaServico;
import com.luan.ecommerce.ecommerce.servico.mapper.CategoriaMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.util.Collection;
import java.util.List;

@Component
public class CategoriaBuilder extends ConstrutorDeEntidade<Categoria> {

    @Autowired
    private CategoriaMapper categoriaMapper;

    @Autowired
    private CategoriaServico categoriaServico;

    @Override
    protected Categoria construirEntidade() throws ParseException {
        Categoria categoria = new Categoria();
        categoria.setId(2);

        return categoria;
    }

    @Override
    protected Categoria persistir(Categoria entidade) {
        return entidade;
    }

    @Override
    protected Collection<Categoria> obterTodos() {
        List<Categoria> listaDTO = categoriaMapper.toEntity(categoriaServico.listar());
        return null;
    }

    @Override
    protected Categoria obterPorId(Integer id) {
        return categoriaMapper.toEntity(categoriaServico.obterPorId(id));
    }
}
