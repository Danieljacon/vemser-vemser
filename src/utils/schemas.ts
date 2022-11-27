import * as yup from "yup";

export const stepOneSchema = yup.object().shape({
    nome: yup
      .string()
      .required("O campo de nome é obrigatório")
      .min(3, "É necessário no mínimo 3 letras")
      .matches(/^[a-zA-Z ]*$/, "Nome inválido"),
    email: yup.string().email("Email inválido").required("Email obrigatório"),
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
      .matches(
        /^[0-9]{2}\.[0-9]{3}\.[0-9]{3}\-[0-9]{1}$/,
        "O RG precisa ser válido."
      ),
    estado: yup.string().required("Estado obrigatório"),
    cidade: yup
      .string()
      .min(3, "É necessário no mínimo 3 letras")
      .required("Cidade obrigatório"),
  });
