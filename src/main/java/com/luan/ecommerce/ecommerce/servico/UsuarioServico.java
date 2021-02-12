package com.luan.ecommerce.ecommerce.servico;

import com.luan.ecommerce.ecommerce.dominio.Usuario;
import com.luan.ecommerce.ecommerce.repositorio.UsuarioRepositorio;
import com.luan.ecommerce.ecommerce.servico.dto.UsuarioDTO;
import com.luan.ecommerce.ecommerce.servico.mapper.UsuarioMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UsuarioServico {

    private final UsuarioRepositorio usuarioRepositorio;
    private final UsuarioMapper usuarioMapper;

    public List<UsuarioDTO> listar() {
        return usuarioMapper.toDto(usuarioRepositorio.findAll());
    }

    public UsuarioDTO buscarPorId(Usuario usuario) {
        return usuarioMapper.toDto(usuarioRepositorio.findById(usuario.getId())
                .orElseThrow(() -> new RuntimeException("Usuário não existe!")));
    }

    public UsuarioDTO buscarPorCpf(Usuario usuario) {
        return usuarioMapper.toDto(usuarioRepositorio.findByCpf(usuario.getCpf()));
    }

    public UsuarioDTO buscarPorEmail(Usuario usuario) {
        return usuarioMapper.toDto(usuarioRepositorio.findByEmail(usuario.getEmail()));
    }

    public UsuarioDTO buscarPorRg(Usuario usuario) {
        return usuarioMapper.toDto(usuarioRepositorio.findByRg(usuario.getRg()));
    }

    public Usuario salvar(Usuario usuario) {

    }
}
