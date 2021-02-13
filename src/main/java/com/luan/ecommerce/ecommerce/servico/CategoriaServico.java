package com.luan.ecommerce.ecommerce.servico;

import com.luan.ecommerce.ecommerce.dominio.Categoria;
import com.luan.ecommerce.ecommerce.repositorio.CategoriaRepositorio;
import com.luan.ecommerce.ecommerce.servico.dto.CategoriaDTO;
import com.luan.ecommerce.ecommerce.servico.mapper.CategoriaMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoriaServico {

    private final CategoriaRepositorio categoriaRepositorio;
    private final CategoriaMapper categoriaMapper;

    public List<CategoriaDTO> listar() {
        return categoriaMapper.toDto(categoriaRepositorio.findAll());
    }

    public CategoriaDTO obterPorId(Integer idCategoria) {
        return categoriaMapper.toDto(categoriaRepositorio.findById(idCategoria)
                .orElseThrow(() -> new RuntimeException("Categoria não existe!")));
    }
}
