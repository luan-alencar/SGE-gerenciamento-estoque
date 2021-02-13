package com.luan.ecommerce.ecommerce.repositorio;

import com.luan.ecommerce.ecommerce.dominio.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepositorio extends JpaRepository<Usuario, Integer> {

    Usuario findByCpf(String cpf);

    Usuario findByEmail(String email);

    Usuario findByRg(String rg);
}
