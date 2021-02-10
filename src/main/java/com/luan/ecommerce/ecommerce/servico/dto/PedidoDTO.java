package com.luan.ecommerce.ecommerce.servico.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDateTime;

@Getter
@Setter
public class PedidoDTO implements Serializable {

    private Integer id;
    private LocalDateTime instante;
    private Integer usuario;
    private Integer endereco;
}
