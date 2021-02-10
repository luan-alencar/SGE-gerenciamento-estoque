package com.luan.ecommerce.ecommerce.servico.mapper;

import com.luan.ecommerce.ecommerce.dominio.Pedido;
import com.luan.ecommerce.ecommerce.servico.dto.PedidoDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {})
public interface PedidoMapper extends EntityMapper<PedidoDTO, Pedido> {
}
