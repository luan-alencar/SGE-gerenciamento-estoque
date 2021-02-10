package com.luan.ecommerce.ecommerce.dominio;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "usuario")
public class Usuario implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    private Integer id;
    @Column(name = "nome")
    private String nome;
    @Column(name = "cpf")
    private String cpf;
    @Column(name = "rg")
    private String rg;
    @Column(name = "email")
    private String email;
    @Column(name = "data_aniversario")
    private LocalDate dataAniversario;
    @Column(name = "admin")
    private Boolean admin;
}