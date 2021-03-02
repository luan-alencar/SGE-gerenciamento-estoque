package com.luan.ecommerce.ecommerce.servico.dto;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import java.io.Serializable;
import java.time.LocalDate;

@Getter
@Setter
public class UsuarioDTO implements Serializable {

    private Integer id;
    private String nome;
    private String cpf;
    private String rg;
    private String telefone;
    private String email;
    private LocalDate dataNascimento;
    private String chave;
    private Boolean admin;
}
