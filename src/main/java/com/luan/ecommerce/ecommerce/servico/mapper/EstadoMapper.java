package com.luan.ecommerce.ecommerce.servico.mapper;

import com.luan.ecommerce.ecommerce.dominio.Estado;
import com.luan.ecommerce.ecommerce.servico.dto.EstadoDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {})
public interface EstadoMapper extends EntityMapper<EstadoDTO, Estado> {
}
