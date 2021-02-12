package com.luan.ecommerce.ecommerce.servico.mapper;

import com.luan.ecommerce.ecommerce.dominio.Cidade;
import com.luan.ecommerce.ecommerce.servico.dto.CidadeDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = {EnderecoMapper.class})
public interface CidadeMapper extends EntityMapper<CidadeDTO, Cidade> {

}
