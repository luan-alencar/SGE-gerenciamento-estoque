package com.luan.ecommerce.ecommerce.repositorio;

import com.luan.ecommerce.ecommerce.dominio.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRepositorio extends JpaRepository<Produto, Integer> {
}
