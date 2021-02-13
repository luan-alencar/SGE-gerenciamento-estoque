package com.luan.ecommerce.ecommerce.servico.mapper;

import com.luan.ecommerce.ecommerce.dominio.Usuario;
import com.luan.ecommerce.ecommerce.servico.dto.UsuarioDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", uses = {})
public interface UsuarioMapper extends EntityMapper<UsuarioDTO, Usuario> {

}
