package com.luan.ecommerce.ecommerce.dominio;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class Categoria implements Serializable {
    private static final long serialVersionUID = 1L;

    private Integer id;
    private String descricao;
}
