package com.luan.ecommerce.ecommerce.servico.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDate;

@Getter
@Setter
public class UsuarioDTO implements Serializable {

    private Integer id;
    private String nome;
    private String cpf;
    private String rg;
    private String email;
    private LocalDate dataNasciment;
    private Boolean tipoUsuario;
}
