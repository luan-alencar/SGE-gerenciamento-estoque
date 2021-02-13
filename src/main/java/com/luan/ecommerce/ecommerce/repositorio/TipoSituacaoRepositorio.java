package com.luan.ecommerce.ecommerce.repositorio;

import com.luan.ecommerce.ecommerce.dominio.TipoSituacao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TipoSituacaoRepositorio extends JpaRepository<TipoSituacao, Integer> {
}
