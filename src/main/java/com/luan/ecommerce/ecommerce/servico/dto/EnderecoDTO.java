package com.luan.ecommerce.ecommerce.servico.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class EnderecoDTO implements Serializable {

    private Integer id;
    private String bairro;
    private String cep;
    private String completo;
    private String logradouro;
    private Integer numero;
    private Integer usuario;
    private Integer cidade;
}
