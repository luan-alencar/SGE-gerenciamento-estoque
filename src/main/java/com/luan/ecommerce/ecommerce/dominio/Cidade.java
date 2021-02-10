package com.luan.ecommerce.ecommerce.dominio;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Getter
@Setter
@Entity
@Table(name = "cidade")
public class Cidade implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    private Integer id;
    @Column(name = "nome")
    private String nome;
}
