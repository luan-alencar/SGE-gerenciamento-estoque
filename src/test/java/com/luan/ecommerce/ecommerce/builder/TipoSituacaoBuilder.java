package com.luan.ecommerce.ecommerce.builder;

import com.luan.ecommerce.ecommerce.dominio.TipoSituacao;
import com.luan.ecommerce.ecommerce.servico.TipoSituacaoServico;
import com.luan.ecommerce.ecommerce.servico.mapper.TipoSituacaoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.text.ParseException;
import java.util.Collection;

@Component
public class TipoSituacaoBuilder extends ConstrutorDeEntidade<TipoSituacao>{

    @Autowired
    private TipoSituacaoServico tipoSituacaoServico;

    @Autowired
    private TipoSituacaoMapper tipoSituacaoMapper;

    @Override
    protected TipoSituacao construirEntidade() throws ParseException {
        TipoSituacao tipoSituacao = new TipoSituacao();
        tipoSituacao.setId(1);
        return tipoSituacao;
    }

    @Override
    protected TipoSituacao persistir(TipoSituacao entidade) {
        return null;
    }

    @Override
    protected Collection<TipoSituacao> obterTodos() {
        return tipoSituacaoMapper.toEntity(tipoSituacaoServico.listar());
    }

    @Override
    protected TipoSituacao obterPorId(Integer id) {
        return null;
    }
}
