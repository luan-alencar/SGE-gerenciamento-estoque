package com.luan.ecommerce.ecommerce.repositorio;

import com.luan.ecommerce.ecommerce.dominio.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UsuarioRepositorio extends JpaRepository<Usuario, Integer> {


    List<Usuario> findByCpf(String cpf);

    List<Usuario> findByEmail(String email);

    Usuario findByChave(String chave);
}
