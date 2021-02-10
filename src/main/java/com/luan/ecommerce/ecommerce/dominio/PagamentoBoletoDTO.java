package com.luan.ecommerce.ecommerce.dominio;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDate;

@Getter
@Setter
public class PagamentoBoletoDTO implements Serializable {

    private Integer pedido;
    private LocalDate dataPagamento;
    private LocalDate dataVencimento;
}
