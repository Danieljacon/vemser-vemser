import {
  Grid,
  TextField,
  Paper,
  Typography,
  Divider,
  Stack,
  Button,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useCandidates } from "../../context/CandidatesContext";
import React from "react";

interface ICandidateForm {
  nome: string;
  email: string;
  telefone: string;
  rg: string;
  estado: string;
  cidade: string;
}

interface IStepOneProps {
  nextFormStep?: () => void;
  formStep?: number;
}

export const StepOne: React.FC<IStepOneProps> = ({
  nextFormStep,
  formStep,
}) => {
  const { setFormValues } = useCandidates();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICandidateForm>({
    mode: "all",
  });

  const handleFormSubmit = (data: ICandidateForm) => {
    setFormValues(data);
    nextFormStep && nextFormStep();
  };

  return (
    <Stack
      direction={{
        xs: "column",
        md: "row",
      }}
      spacing={2}
      my={4}
      sx={{
        display: formStep === 0 ? "" : "none",
      }}
    >
      <Grid
        component="form"
        container
        spacing={2}
        alignItems="center"
        alignContent="center"
        id="register-candidate"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <Grid item xs={12}>
          <TextField
            label="Nome"
            variant="outlined"
            sx={{
              width: "100%",
            }}
            id="candidato-nome"
            {...register("nome")}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            variant="outlined"
            sx={{
              width: "100%",
            }}
            id="candidato-email"
            {...register("email")}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Telefone"
            variant="outlined"
            sx={{ width: "100%" }}
            id="candidato-telefone"
            {...register("telefone")}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="RG"
            variant="outlined"
            sx={{ width: "100%" }}
            id="candidato-rg"
            {...register("rg")}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Estado"
            variant="outlined"
            sx={{ width: "100%" }}
            id="candidato-estado"
            {...register("estado")}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Cidade"
            variant="outlined"
            sx={{ width: "100%" }}
            id="candidato-cidade"
            {...register("cidade")}
          />
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained">
            Próximo
          </Button>
        </Grid>
      </Grid>
      <Paper
        elevation={2}
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          gap: 1,
          maxWidth: {
            xs: "100%",
            md: "400px",
            lg: "600px",
          },
        }}
      >
        <Typography variant="h5" component="h1" textAlign="center">
          Inscrições da 11° edição do <strong>#VemSer</strong> DBC
        </Typography>
        <Divider />
        <Typography variant="h6" component="h2">
          Quer fazer parte de um programa de capacitação que desenvolve e
          transforma estudantes em profissionais, utilizando as tecnologias que
          mais empregam no mercado de trabalho?
        </Typography>

        <Typography variant="body1">
          O Vem Ser DBC atualmente é composto por três trilhas de formação:{" "}
          <strong>Front-End, Back-end e Testes Automatizados (QA)</strong>. Por
          meio destas trilhas de formação, os estudantes selecionados são
          capacitados com as tecnologias mais utilizadas no mercado de trabalho.
        </Typography>
        <Typography variant="body1">
          A formação tem duração de <strong>12 semanas</strong> e os
          selecionados terão aulas online e ao vivo de segunda a sexta-feira,
          das 13:30 às 17:30 (horário de Brasília). Além disso, receberão uma
          bolsa auxílio mensal no valor de <strong>R$ 800,00</strong>.
        </Typography>
        <Divider />
      </Paper>
    </Stack>
  );
};
