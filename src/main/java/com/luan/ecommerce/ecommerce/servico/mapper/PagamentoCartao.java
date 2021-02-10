package com.luan.ecommerce.ecommerce.servico.mapper;

import com.luan.ecommerce.ecommerce.servico.dto.PagamentoCartaoDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {})
public interface PagamentoCartao extends EntityMapper<PagamentoCartaoDTO, PagamentoCartao> {

}
