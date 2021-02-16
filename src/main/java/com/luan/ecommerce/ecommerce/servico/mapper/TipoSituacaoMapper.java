package com.luan.ecommerce.ecommerce.servico.mapper;

import com.luan.ecommerce.ecommerce.dominio.TipoSituacao;
import com.luan.ecommerce.ecommerce.servico.dto.TipoSituacaoDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {})
public interface TipoSituacaoMapper extends EntityMapper<TipoSituacaoDTO, TipoSituacao> {
}
