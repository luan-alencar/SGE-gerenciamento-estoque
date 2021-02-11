package com.luan.ecommerce.ecommerce.dominio;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Embeddable;
import java.io.Serializable;

@Getter
@Setter
@Embeddable
public class IdPagamento implements Serializable {
    private final static long serialVersionUID = 1L;

    private Integer idPedido;
    private Integer idEstado;
}
