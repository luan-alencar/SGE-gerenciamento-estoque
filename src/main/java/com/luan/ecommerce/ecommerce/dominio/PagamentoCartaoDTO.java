package com.luan.ecommerce.ecommerce.dominio;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class PagamentoCartaoDTO implements Serializable {

    private Integer pedido;
    private Integer parcelas;
}
