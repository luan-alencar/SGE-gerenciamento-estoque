package com.luan.ecommerce.ecommerce.servico.dto;

import com.luan.ecommerce.ecommerce.dominio.Pagamento;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class PagamentoCartaoDTO extends Pagamento implements Serializable {

    private Integer pedido;
    private Integer parcelas;
}
