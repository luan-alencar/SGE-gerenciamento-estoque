package com.luan.ecommerce.ecommerce.servico.dto;

import com.luan.ecommerce.ecommerce.dominio.Produto;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class CategoriaDTO implements Serializable {

    private Integer id;
    private String descricao;
    private List<Produto> produtos = new ArrayList<>();
}
