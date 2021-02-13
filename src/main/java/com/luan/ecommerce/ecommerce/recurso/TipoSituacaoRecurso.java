package com.luan.ecommerce.ecommerce.recurso;

import com.luan.ecommerce.ecommerce.dominio.TipoSituacao;
import com.luan.ecommerce.ecommerce.servico.TipoSituacaoServico;
import com.luan.ecommerce.ecommerce.servico.dto.TipoSituacaoDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "api/tipos-situacao")
public class TipoSituacaoRecurso {

    private final TipoSituacaoServico tipoSituacaoServico;

    @GetMapping
    public ResponseEntity<List<TipoSituacaoDTO>> listar() {
        return ResponseEntity.ok(tipoSituacaoServico.listar());
    }

    @GetMapping("/{id}")
    public ResponseEntity<TipoSituacaoDTO> buscarPorId(@PathVariable Integer idTipoSituacao) {
        return ResponseEntity.ok(tipoSituacaoServico.buscarPorId(idTipoSituacao));
    }
}
