package com.luan.ecommerce.ecommerce.servico.mapper;

import com.luan.ecommerce.ecommerce.dominio.Produto;
import com.luan.ecommerce.ecommerce.servico.dto.ProdutoDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = {})
public interface ProdutoMapper extends EntityMapper<ProdutoDTO, Produto> {

    @Override
    @Mapping(source = "categorias", target = "categoria.id")
    Produto toEntity(ProdutoDTO produtoDTO);

    @Override
    @Mapping(source = "categoria.id", target = "categorias")
    ProdutoDTO toDto(Produto produto);
}
