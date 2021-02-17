package com.luan.ecommerce.ecommerce.servico;

import com.luan.ecommerce.ecommerce.dominio.Categoria;
import com.luan.ecommerce.ecommerce.dominio.Produto;
import com.luan.ecommerce.ecommerce.dominio.TipoSituacao;
import com.luan.ecommerce.ecommerce.repositorio.CategoriaRepositorio;
import com.luan.ecommerce.ecommerce.repositorio.ProdutoRepositorio;
import com.luan.ecommerce.ecommerce.servico.dto.ProdutoDTO;
import com.luan.ecommerce.ecommerce.servico.mapper.ProdutoMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
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
        return produtoMapper.toDto(produtoRepositorio.save(produto));
    }

    public ProdutoDTO editar(Produto produto) {
        if (!produtoRepositorio.existsById(produto.getId())) {
            throw new RuntimeException("Produto nao existe!");
        }
        return produtoMapper.toDto(produto);
    }

    public void remover(Integer idProduto) {
        produtoRepositorio.deleteById(idProduto);
    }
}
