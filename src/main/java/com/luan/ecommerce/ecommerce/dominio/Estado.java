package com.luan.ecommerce.ecommerce.dominio;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@Setter
@Entity
@Table(name = "estado")
public class Estado implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    private Integer id;
    @Column(name = "nome")
    private String nome;
}
