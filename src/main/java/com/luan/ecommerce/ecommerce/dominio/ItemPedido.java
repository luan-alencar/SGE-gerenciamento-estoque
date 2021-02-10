package com.luan.ecommerce.ecommerce.dominio;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.io.Serializable;

@Getter
@Setter
@Entity
@Table(name = "item_pedido")
public class ItemPedido implements Serializable {
    private static final long serialVersionUID = 1L;

    @Column(name = "desconto")
    private Double desconto;
    @Column(name = "preco")
    private Double preco;
    @Column(name = "quantidade")
    private Integer quantidade;
    @Column(name = "id_pedido")
    private Pedido pedido;
    @Column(name = "id_produto")
    private Produto produto;
}
