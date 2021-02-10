package com.luan.ecommerce.ecommerce.servico.mapper;

import com.luan.ecommerce.ecommerce.servico.dto.PagamentoBoletoDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {PedidoMapper.class})
public interface PagamentoBoleto extends EntityMapper<PagamentoBoletoDTO, PagamentoBoleto> {
}
