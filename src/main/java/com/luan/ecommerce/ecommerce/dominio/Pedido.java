package com.luan.ecommerce.ecommerce.dominio;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "pedido")
@Inheritance(strategy = InheritanceType.JOINED)
public class Pedido implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    private Integer id;

    @Column(name = "instante")
    private LocalDateTime instante;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "pedido")
    private Pagamento pagamento;

    @ManyToOne
    @Column(name = "id_usuario")
    private Usuario usuario;

    @ManyToOne
    @Column(name = "id_endereco_de_entrega")
    private Endereco endereco;
}


