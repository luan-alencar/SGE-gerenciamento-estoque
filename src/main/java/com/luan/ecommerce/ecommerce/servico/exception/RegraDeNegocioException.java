package com.luan.ecommerce.ecommerce.servico.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class RegraDeNegocioException extends RuntimeException {

    private String msg;
    private int request;

    public RegraDeNegocioException(final String message) {
        this(message, null);
    }

    public RegraDeNegocioException(final String message, final Throwable cause) {
        super(message, cause);
    }
}