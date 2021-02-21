package com.luan.ecommerce.ecommerce.servico;

import com.luan.ecommerce.ecommerce.dominio.Categoria;
import com.luan.ecommerce.ecommerce.dominio.Produto;
import com.luan.ecommerce.ecommerce.repositorio.CategoriaRepositorio;
import com.luan.ecommerce.ecommerce.repositorio.ProdutoRepositorio;
import com.luan.ecommerce.ecommerce.servico.dto.ProdutoDTO;
import com.luan.ecommerce.ecommerce.servico.exception.RegraDeNegocioException;
import com.luan.ecommerce.ecommerce.servico.mapper.ProdutoMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class ProdutoServico {

    private final CategoriaRepositorio categoriaRepositorio;
    private final ProdutoRepositorio produtoRepositorio;
    private final ProdutoMapper produtoMapper;

    public List<ProdutoDTO> listar() {
        return produtoMapper.toDto(produtoRepositorio.findAll());
    }

    public ProdutoDTO buscarPorId(Integer idProduto) {
        return produtoMapper.toDto(produtoRepositorio.findById(idProduto)
                .orElseThrow(()
                        -> new RuntimeException()));
    }

    public ProdutoDTO salvar(ProdutoDTO produtoDTO) {
        Produto produto = produtoMapper.toEntity(produtoDTO);

        Categoria categoria = produto.getCategoria();
        produto.setCategoria(categoria);

        produtoRepositorio.save(produto);

        return produtoMapper.toDto(produto);
    }

    public ProdutoDTO editar(ProdutoDTO produtoDTO) {
        if (!produtoRepositorio.existsById(produtoDTO.getId())) {
            throw new RegraDeNegocioException("Produto não existe");
        }
        Produto produto = produtoMapper.toEntity(produtoDTO);
        produtoRepositorio.save(produto);
        return produtoMapper.toDto(produto);
    }

    public void remover(Integer idProduto) {
        produtoRepositorio.deleteById(idProduto);
    }
}
