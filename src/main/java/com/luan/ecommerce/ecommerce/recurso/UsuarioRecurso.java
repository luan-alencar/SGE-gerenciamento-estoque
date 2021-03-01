package com.luan.ecommerce.ecommerce.recurso;

import com.luan.ecommerce.ecommerce.servico.dto.ChaveDTO;
import com.luan.ecommerce.ecommerce.servico.UsuarioServico;
import com.luan.ecommerce.ecommerce.servico.dto.UsuarioDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "api/usuarios")
public class UsuarioRecurso {

    private final UsuarioServico usuarioServico;

    @GetMapping
    public ResponseEntity<List<UsuarioDTO>> listar() {
        return new ResponseEntity<>(usuarioServico.listar(), HttpStatus.OK);
    }

    @GetMapping("/{idUsuario}")
    public ResponseEntity<UsuarioDTO> buscarPorId(@PathVariable Integer idUsuario) {
        return ResponseEntity.ok(usuarioServico.buscarPorId(idUsuario));
    }

    @PostMapping
    public ResponseEntity<UsuarioDTO> salvar(@RequestBody UsuarioDTO usuarioDTO) {
        return ResponseEntity.status(HttpStatus.CREATED).body(usuarioServico.salvar(usuarioDTO));
    }

    @PutMapping
    public ResponseEntity<UsuarioDTO> editar(@RequestBody UsuarioDTO usuarioDTO) {
        return ResponseEntity.status(HttpStatus.OK).body(usuarioServico.editar(usuarioDTO));
    }

    @PostMapping("/login")
    public  ResponseEntity<UsuarioDTO> obterUsuarioPorChave(@RequestBody ChaveDTO chaveDTO){
        return  ResponseEntity.ok(usuarioServico.obterPorChave(chaveDTO));
    }

    @DeleteMapping("/{idUsuario}")
    public ResponseEntity<Void> remover(@PathVariable Integer idUsuario) {
        usuarioServico.remover(idUsuario);
        return ResponseEntity.ok().build();
    }
}
