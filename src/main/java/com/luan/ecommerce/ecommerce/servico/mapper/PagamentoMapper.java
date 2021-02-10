package com.luan.ecommerce.ecommerce.servico.mapper;

import com.luan.ecommerce.ecommerce.servico.dto.PagamentoDTO;
import com.luan.ecommerce.ecommerce.dominio.Pagamento;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {})
public interface PagamentoMapper extends EntityMapper<PagamentoDTO, Pagamento> {
}
