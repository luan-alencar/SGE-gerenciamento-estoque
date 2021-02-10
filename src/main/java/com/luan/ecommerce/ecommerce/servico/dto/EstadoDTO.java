package com.luan.ecommerce.ecommerce.servico.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class EstadoDTO implements Serializable {

    private Integer id;
    private String nome;
    private Integer estado;
}
