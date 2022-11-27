import * as yup from "yup";

export const stepOneSchema = yup.object().shape({
  nome: yup
    .string()
    .required("O campo de nome é obrigatório")
    .min(3, "É necessário no mínimo 3 letras")
    .matches(/^[a-zA-Z ]*$/, "Nome inválido"),
  email: yup.string().email("Email inválido").required("Email obrigatório"),
  cpf: yup
    .string()
    .required("CPF obrigatório")
    .matches(/^(\d{3}\.?\d{3}\.?\d{3}\-?\d{2})$/, "CPF inválido"),
  telefone: yup
    .string()
    .required("Telefone obrigatório")
    .matches(
      /^\([1-9]{2}\)(?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/,
      "O telefone precisa ser válido."
    ),
  rg: yup
    .string()
    .required("RG obrigatório")
    .min(8, "O RG precisa ter no mínimo 8 caracteres"),
  estado: yup.string().required("Estado obrigatório"),
  cidade: yup
    .string()
    .min(3, "É necessário no mínimo 3 letras")
    .required("Cidade obrigatório"),
});

export const stepTwoSchema = yup.object().shape({
  motivo: yup
    .string()
    .when(["altruismo", "reconhecimento", "desafios", "problemas"], {
      is: (
        altruismo: boolean,
        reconhecimento: boolean,
        desafios: boolean,
        problemas: boolean
      ) => {
        return (
          altruismo === false &&
          reconhecimento === false &&
          desafios === false &&
          problemas === false
        );
      },
      then: yup
        .string()
        .required(
          "Preencha o campo 'Outro motivo' ou selecione uma das opções acima"
        ),
      otherwise: yup.string(),
    }),
  instituicao: yup.string().when("matriculado", {
    is: "sim",
    then: yup.string().required("Preencha o campo com o nome da instituição"),
  }),
  curso: yup.string().when("matriculado", {
    is: "sim",
    then: yup.string().required("Preencha o campo com o nome do curso"),
  }),
  github: yup
    .string()
    .url("Preencha com um link correto: 'https://github.com/'")
    .matches(
      /^https:\/\/github.com\/.*/,
      "Preencha com um link correto: 'https://github.com/'"
    )
    .required("Preencha o campo com o seu usuário do Github"),
  lgpd: yup.boolean().oneOf([true], "É necessário aceitar os termos"),
});
