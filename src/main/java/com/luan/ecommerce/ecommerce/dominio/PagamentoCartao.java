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
@Table(name = "pagamento_cartao")
public class PagamentoCartao extends Pagamento implements Serializable {
    private static final long serialVersionUID = 1L;

    @Column(name = "id_pedido")
    private Pedido pedido;
    @Column(name = "parcelas")
    private Integer parcelas;
}
