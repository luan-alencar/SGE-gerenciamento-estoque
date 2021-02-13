package com.luan.ecommerce.ecommerce.recurso;

import com.luan.ecommerce.ecommerce.servico.UsuarioServico;
import com.luan.ecommerce.ecommerce.servico.dto.UsuarioDTO;
import com.luan.ecommerce.ecommerce.servico.mapper.UsuarioMapper;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
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

    @GetMapping("/{id}")
    public ResponseEntity<UsuarioDTO> buscarPorId(@PathVariable Integer idUsuario) {
        return new ResponseEntity<>(usuarioServico.buscarPorId(idUsuario), HttpStatus.OK);
    }

    @GetMapping("/{cpf}")
    public ResponseEntity<UsuarioDTO> buscarPorCpf(String cpf) {
        return new ResponseEntity<>(usuarioServico.buscarPorCpf(cpf), HttpStatus.OK);
    }

    @GetMapping("/{email}")
    public ResponseEntity<UsuarioDTO> buscarPorEmail(String email) {
        return new ResponseEntity<>(usuarioServico.buscarPorEmail(email), HttpStatus.OK);
    }

    @GetMapping("/{rg}")
    public ResponseEntity<UsuarioDTO> buscarPorRg(String rg) {
        return new ResponseEntity<>(usuarioServico.buscarPorRg(rg), HttpStatus.OK);
    }


    @PostMapping
    @SneakyThrows
    public ResponseEntity<UsuarioDTO> salvar(@RequestBody UsuarioDTO usuarioDTO) {
        return ResponseEntity.status(HttpStatus.CREATED).body(usuarioServico.salvar(usuarioDTO));
    }

    @PutMapping
    public ResponseEntity<UsuarioDTO> editar(@RequestBody UsuarioDTO usuarioDTO) {
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(usuarioServico.editar(usuarioDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> remover(@PathVariable Integer idUsuario) {
        usuarioServico.remover(idUsuario);
        return ResponseEntity.ok().build();
    }
}

