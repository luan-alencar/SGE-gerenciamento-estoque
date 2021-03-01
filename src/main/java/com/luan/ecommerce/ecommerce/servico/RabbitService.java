package com.luan.ecommerce.ecommerce.servico;

import com.luan.ecommerce.ecommerce.EcommerceApplication;
import com.luan.ecommerce.ecommerce.servico.dto.EmailDTO;
import com.luan.ecommerce.ecommerce.servico.sink.SgeSink;
import lombok.RequiredArgsConstructor;
import org.springframework.cloud.stream.annotation.EnableBinding;
import org.springframework.cloud.stream.annotation.StreamListener;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Service;

@Service
@EnableBinding(EcommerceApplication.class)
@RequiredArgsConstructor
public class RabbitService {
    private final EmailServico emailServico;

    @StreamListener(target = SgeSink.BINDING_MAILER)
    public void sendMail(@Payload EmailDTO emailDTO) {
        emailServico.sendEmail(emailDTO);
    }
}
