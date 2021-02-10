package com.luan.ecommerce.ecommerce.dominio;

import lombok.Getter;
import lombok.Setter;
import org.springframework.integration.config.EnableIntegration;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "endereco")
public class Endereco implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    private Integer id;
    private String bairro;
    private String cep;
    private String complemento;
    private String logradouro;
    private Integer numero;
    private Usuario usuario;
}
