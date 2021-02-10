package com.luan.ecommerce.ecommerce.servico.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDate;
import com.luan.ecommerce.ecommerce.dominio.Pagamento;

@Getter
@Setter
public class PagamentoBoletoDTO extends Pagamento implements Serializable {

    private Integer pedido;
    private LocalDate dataPagamento;
    private LocalDate dataVencimento;
}
