package com.luan.ecommerce.ecommerce.servico.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class PagamentoDTO implements Serializable {

    private Integer pedido;
    private Integer estado;
}
