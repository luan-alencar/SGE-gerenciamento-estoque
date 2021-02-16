package com.luan.ecommerce.ecommerce.servico.mapper;

import com.luan.ecommerce.ecommerce.dominio.Produto;
import com.luan.ecommerce.ecommerce.servico.dto.ProdutoDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = {})
public interface ProdutoMapper extends EntityMapper<ProdutoDTO, Produto> {

    @Override
    @Mapping(source = "categoria", target = "categoria.id")
    @Mapping(source = "tipoSituacao", target = "tipoSituacao.id")
    Produto toEntity(ProdutoDTO dto);

    @Override
    @Mapping(source = "categoria.id", target = "categoria")
    @Mapping(source = "tipoSituacao.id", target = "tipoSituacao")
    ProdutoDTO toDto(Produto entity);
}
