package com.luan.ecommerce.ecommerce.builder;

import com.luan.ecommerce.ecommerce.dominio.Categoria;
import com.luan.ecommerce.ecommerce.dominio.Produto;
import com.luan.ecommerce.ecommerce.dominio.TipoSituacao;
import com.luan.ecommerce.ecommerce.repositorio.ProdutoRepositorio;
import com.luan.ecommerce.ecommerce.servico.ProdutoServico;
import com.luan.ecommerce.ecommerce.servico.dto.ProdutoDTO;
import com.luan.ecommerce.ecommerce.servico.mapper.ProdutoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.util.Collection;
import java.util.List;

@Component
public class ProdutoBuilder extends ConstrutorDeEntidade<Produto> {

    @Autowired
    private CategoriaBuilder categoriaBuilder;

//    @Autowired
//    private TipoSituacaoBuilder tipoSituacaoBuilder;

    @Autowired
    private ProdutoMapper produtoMapper;

    @Autowired
    private ProdutoServico produtoServico;

    @Autowired
    private ProdutoRepositorio produtoRepositorio;

    @Override
    protected Produto construirEntidade() throws ParseException {
        Produto produto = new Produto();
        Categoria categoria = categoriaBuilder.construir();
//        TipoSituacao tipoSituacao = tipoSituacaoBuilder.construir();

        produto.setNome("Notebook");
//        produto.setCategorias(categoria);
        produto.setPreco(10.000);
        produto.setDescricao("Encomenda de 3 notebooks Dell");
        produto.setQuantidade(3);
        produto.setTipoSituacao(null);
        return produto;
    }

    @Override
    protected Produto persistir(Produto entidade) {
        produtoServico.salvar(produtoMapper.toDto(entidade));
        return entidade;
    }

    @Override
    protected Collection<Produto> obterTodos() {
        List<ProdutoDTO> listaDTO = produtoServico.listar();
        List<Produto> listaDominio = produtoMapper.toEntity(listaDTO);
        return listaDominio;
    }

    @Override
    protected Produto obterPorId(Integer id) {
        return produtoMapper.toEntity(produtoServico.buscarPorId(id));
    }
}
