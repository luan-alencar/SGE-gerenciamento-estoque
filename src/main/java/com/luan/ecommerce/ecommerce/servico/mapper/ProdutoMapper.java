package com.luan.ecommerce.ecommerce.servico.mapper;

import com.luan.ecommerce.ecommerce.dominio.Produto;
import com.luan.ecommerce.ecommerce.servico.dto.ProdutoDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring", uses = {})
public interface ProdutoMapper extends EntityMapper<ProdutoDTO, Produto> {

    @Override
    @Mapping(source = "categorias", target = "categorias.id")
    List<Produto> toEntity(List<ProdutoDTO> produtoDTO);

    @Override
    @Mapping(source = "categorias.id", target = "categorias")
    List<ProdutoDTO> toDto(List<Produto> produto);
}
