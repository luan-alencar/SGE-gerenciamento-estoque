package com.luan.ecommerce.ecommerce.recurso;

import com.luan.ecommerce.ecommerce.dominio.Categoria;
import com.luan.ecommerce.ecommerce.servico.CategoriaServico;
import com.luan.ecommerce.ecommerce.servico.dto.CategoriaDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/categorias")
public class CategoriaRecurso {

    private final CategoriaServico categoriaServico;

    @GetMapping
    public ResponseEntity<List<CategoriaDTO>> listar() {
        return new ResponseEntity<>(categoriaServico.listar(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CategoriaDTO> buscarPorId(@PathVariable Integer idCategoria) {
        return new ResponseEntity<>(categoriaServico.obterPorId(idCategoria), HttpStatus.OK);
    }
}
