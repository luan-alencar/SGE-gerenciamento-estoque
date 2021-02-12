package com.luan.ecommerce.ecommerce.servico.mapper;

import com.luan.ecommerce.ecommerce.dominio.Estado;
import com.luan.ecommerce.ecommerce.servico.dto.EstadoDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = {CidadeMapper.class})
public interface EstadoMapper extends EntityMapper<EstadoDTO, Estado> {

    @Override
    Estado toEntity(EstadoDTO estadoDTO);

    @Override
    EstadoDTO toDto(Estado estado);
}
