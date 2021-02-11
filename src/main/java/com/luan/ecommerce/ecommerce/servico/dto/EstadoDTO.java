package com.luan.ecommerce.ecommerce.servico.dto;

import com.luan.ecommerce.ecommerce.dominio.Cidade;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class EstadoDTO implements Serializable {

    private Integer id;
    private String nome;
    private List<Cidade> cidades = new ArrayList<>();
}
