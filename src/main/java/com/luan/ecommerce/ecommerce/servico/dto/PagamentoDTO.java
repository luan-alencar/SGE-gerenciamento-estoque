package com.luan.ecommerce.ecommerce.servico.dto;

import com.luan.ecommerce.ecommerce.dominio.Pedido;
import com.luan.ecommerce.ecommerce.dominio.Usuario;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
public abstract class PagamentoDTO implements Serializable {

    private Integer id;
    private Integer idUsuario;
    private Integer idPedido;
    private Integer idEstado;
}
