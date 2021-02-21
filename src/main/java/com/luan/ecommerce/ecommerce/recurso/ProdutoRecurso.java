package com.luan.ecommerce.ecommerce.recurso;

import com.luan.ecommerce.ecommerce.servico.ProdutoServico;
import com.luan.ecommerce.ecommerce.servico.dto.ProdutoDTO;
import com.luan.ecommerce.ecommerce.servico.mapper.ProdutoMapper;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/produtos")
public class ProdutoRecurso {

    private final ProdutoServico produtoServico;
    private final ProdutoMapper produtoMapper;

    @GetMapping
    public ResponseEntity<List<ProdutoDTO>> listar() {
        return ResponseEntity.ok(produtoServico.listar());
    }

    @GetMapping("/{idProduto}")
    public ResponseEntity<ProdutoDTO> buscarPorId(@PathVariable Integer idProduto) {
        return ResponseEntity.ok(produtoServico.buscarPorId(idProduto));
    }

    @PutMapping
    public ResponseEntity<ProdutoDTO> editar(@RequestBody ProdutoDTO produtoDTO) {
        return ResponseEntity.ok(produtoServico.editar(produtoDTO));
    }

    @PostMapping
    @SneakyThrows
    public ResponseEntity<ProdutoDTO> salvar(@RequestBody ProdutoDTO produto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(produtoServico.salvar(produto));
    }

    @DeleteMapping("/{idProduto}")
    public void remover(@PathVariable Integer idProduto) {
        produtoServico.remover(idProduto);
    }
}
