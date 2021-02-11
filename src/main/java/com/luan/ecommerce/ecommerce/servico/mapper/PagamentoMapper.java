package com.luan.ecommerce.ecommerce.servico.mapper;

import com.luan.ecommerce.ecommerce.servico.dto.PagamentoDTO;
import com.luan.ecommerce.ecommerce.dominio.Pagamento;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = {})
public interface PagamentoMapper extends EntityMapper<PagamentoDTO, Pagamento> {

    @Override
    @Mapping(source = "idPedido", target = "idPedido.id")
    @Mapping(source = "idEstado", target = "idEstado.id")
    @Mapping(source = "idEstado", target = "id.idEstado")
    @Mapping(source = "idPedido", target = "id.idPedido")
    Pagamento toEntity(PagamentoDTO pagamentoDTO);

    @Override
    @Mapping(source = "idPedido.id", target = "idPedido")
    @Mapping(source = "idEstado.id", target = "idEstado")
    PagamentoDTO toDto(Pagamento pagamento);
}
