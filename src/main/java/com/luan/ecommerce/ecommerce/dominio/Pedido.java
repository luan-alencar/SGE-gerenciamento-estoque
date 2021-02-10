package com.luan.ecommerce.ecommerce.dominio;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "pedido")
public class Pedido implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    private Integer id;
    @Column(name = "isntante")
    private LocalDateTime instante;
    @Column(name = "id_usuario")
    private Usuario usuario;
    @Column(name = "id_endereco_de_entrega")
    private Endereco endereco;
}
