package com.luan.ecommerce.ecommerce.dominio;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.io.Serializable;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "pagamento_boleto")
public abstract class PagamentoBoleto implements Serializable {
    private static final long serialVersionUID = 1L;

    @Column(name = "id_pedido")
    private Pedido pedido;
    @Column(name = "data_pagamento")
    private LocalDateTime dataPagamento;
    @Column(name = "data_vencimento")
    private LocalDateTime dataVencimento;
}
