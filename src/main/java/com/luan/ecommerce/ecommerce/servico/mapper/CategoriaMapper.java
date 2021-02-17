package com.luan.ecommerce.ecommerce.servico.mapper;

import com.luan.ecommerce.ecommerce.dominio.Categoria;
import com.luan.ecommerce.ecommerce.servico.dto.CategoriaDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = {})
public interface CategoriaMapper extends EntityMapper<CategoriaDTO, Categoria> {

}
