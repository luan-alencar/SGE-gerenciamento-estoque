package com.luan.ecommerce.ecommerce.repositorio;

import com.luan.ecommerce.ecommerce.dominio.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoriaRepositorio extends JpaRepository<Categoria, Integer> {
}
