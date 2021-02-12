package com.luan.ecommerce.ecommerce.servico.mapper;

import com.luan.ecommerce.ecommerce.dominio.Endereco;
import com.luan.ecommerce.ecommerce.servico.dto.EnderecoDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = {EstadoMapper.class, CidadeMapper.class})
public interface EnderecoMapper extends EntityMapper<EnderecoDTO, Endereco> {

}
