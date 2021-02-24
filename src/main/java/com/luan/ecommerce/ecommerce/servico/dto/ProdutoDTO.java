package com.luan.ecommerce.ecommerce.servico.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDateTime;

@Getter
@Setter
public class ProdutoDTO implements Serializable {

    private Integer id;
    private String nome;
    private Double preco;
    private String descricao;
    private Integer quantidade;
    private LocalDateTime dataAquisicao;
    private Integer tipoSituacao;
    private Integer categoria;
}
