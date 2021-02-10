package com.luan.ecommerce.ecommerce.servico.mapper;

import com.luan.ecommerce.ecommerce.dominio.ItemPedido;
import com.luan.ecommerce.ecommerce.servico.dto.ItemPedidoDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {})
public interface ItemPedidoMapper extends EntityMapper<ItemPedidoDTO, ItemPedido>{
}
