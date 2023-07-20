'use client';
import React from "react";
import { useForm } from "react-hook-form";
import { ButtonS, FormularioLeftS, FormularioRightS, FormularioS } from "@/app/styles/styles";

export default function Formulario() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <FormularioS onSubmit = { handleSubmit(onSubmit) }>
      <FormularioLeftS>
        <h2>Assine nossa Newsletter!</h2>
      </FormularioLeftS>
      <FormularioRightS>
        <label htmlFor="nome">Nome:</label>
        <input
        type="text"
        id="nome"
        {...register("nome", { required: "O campo precisa ter no máximo 20 caracteres.", maxLength: 20 })}
      />
        <label htmlFor="email">Email:</label>
        <input
        type="email"
        id="email"
        {...register("email", { required: "Email é obrigatório" })}
      />
        <ButtonS>
          <button type="submit">INSCREVA-SE!</button>
        </ButtonS>
      </FormularioRightS>
    </FormularioS>
  );
}

