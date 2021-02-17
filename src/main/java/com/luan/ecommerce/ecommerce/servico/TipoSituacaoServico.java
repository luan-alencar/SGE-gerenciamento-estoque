package com.luan.ecommerce.ecommerce.servico;

import com.luan.ecommerce.ecommerce.dominio.TipoSituacao;
import com.luan.ecommerce.ecommerce.recurso.TipoSituacaoRecurso;
import com.luan.ecommerce.ecommerce.repositorio.TipoSituacaoRepositorio;
import com.luan.ecommerce.ecommerce.servico.dto.TipoSituacaoDTO;
import com.luan.ecommerce.ecommerce.servico.mapper.TipoSituacaoMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TipoSituacaoServico {

    private final TipoSituacaoRepositorio tipoSituacaoRepositorio;
    private final TipoSituacaoMapper tipoSituacaoMapper;

    public List<TipoSituacaoDTO> listar() {
        return tipoSituacaoMapper.toDto(tipoSituacaoRepositorio.findAll());
    }

    public TipoSituacaoDTO buscarPorId(Integer idTipoSituacao) {
        return tipoSituacaoMapper.toDto(tipoSituacaoRepositorio.findById(idTipoSituacao).orElseThrow(() -> new RuntimeException()));
    }
}