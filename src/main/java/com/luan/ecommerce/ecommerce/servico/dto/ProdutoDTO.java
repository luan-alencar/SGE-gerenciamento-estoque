package com.luan.ecommerce.ecommerce.servico.dto;

import com.luan.ecommerce.ecommerce.dominio.Categoria;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class ProdutoDTO implements Serializable {

    private Integer id;
    private String nome;
    private Double preco;
    private String descricao;
    private Integer quantidade;
    private Integer tipoSituacao;
    private Integer categorias;
}
