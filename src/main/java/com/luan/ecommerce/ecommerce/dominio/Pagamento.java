package com.luan.ecommerce.ecommerce.dominio;

import lombok.Cleanup;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.io.Serializable;

@Getter
@Setter
@Entity
@Table(name = "pagamento")
public class Pagamento implements Serializable {
    private static final long serialVersionUID = 1L;

    @Column(name = "id_pedido")
    private Pedido pedido;
    @Column(name = "id_estado")
    private Estado estado;
}
