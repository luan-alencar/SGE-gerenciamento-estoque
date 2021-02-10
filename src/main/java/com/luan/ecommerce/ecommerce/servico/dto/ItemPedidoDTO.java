package com.luan.ecommerce.ecommerce.servico.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class ItemPedidoDTO implements Serializable {

    private Double desconto;
    private Double preco;
    private Integer quantidade;
    private Integer pedido;
    private Integer produto;
}
