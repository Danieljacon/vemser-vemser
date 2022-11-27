import {
  Grid,
  TextField,
  Typography,
  Stack,
  Button,
  FormLabel,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCandidates } from "../../context/CandidatesContext";
import { IInscriptionForm, IStepProps } from "../../utils/interfaces";
import { Radio } from "../../utils/theme";
import { useState } from "react";
import { GithubLogo } from "phosphor-react";
import { Box } from "@mui/system";
import { stepTwoSchema } from "../../utils/schemas";

export const StepTwo: React.FC<IStepProps> = ({
  nextFormStep,
  formStep,
}) => {
  const { setFormValues } = useCandidates();
  const [anotherReason, setAnotherReason] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IInscriptionForm>({
    mode: "all",
    defaultValues: {
      matriculado: "sim",
      turno: "0",
    },
    resolver: yupResolver(stepTwoSchema),
  });

  const matriculado = watch("matriculado");
  matriculado === "nao" && setValue("instituicao", " ");
  matriculado === "nao" && setValue("curso", " ");
  matriculado === "nao" && setValue("turno", "0");

  const handleFormSubmit = (data: IInscriptionForm) => {
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
      sx={{
        display: formStep === 1 ? "" : "none",
      }}
    >
      <Grid
        component="form"
        container
        spacing={2}
        alignContent="center"
        id="register-candidate"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <Grid item xs={12} md={6}>
          <FormLabel component="legend" sx={{ mb: 1 }}>
            Você é matriculado em algum curso de graduação ou técnico?
          </FormLabel>
          <Stack direction="row" spacing={2}>
            <FormLabel
              sx={{
                display: "flex",
                alignItems: "center",
                ml: 1,
              }}
            >
              <Radio
                type="radio"
                value="sim"
                id="matriculado-sim"
                {...register("matriculado")}
              />
              Sim
            </FormLabel>
            <FormLabel
              sx={{
                display: "flex",
                alignItems: "center",
                ml: 1,
              }}
            >
              <Radio
                type="radio"
                value="nao"
                id="matriculado-nao"
                {...register("matriculado")}
              />
              Não
            </FormLabel>
          </Stack>
        </Grid>

        {matriculado === "sim" && (
          <Grid item xs={12} md={6}>
            <FormLabel component="legend" sx={{ mb: 1 }}>
              Em qual turno você estuda?
            </FormLabel>
            <Stack direction="row" spacing={2}>
              <FormLabel
                sx={{
                  display: "flex",
                  alignItems: "center",
                  ml: 1,
                }}
              >
                <Radio
                  type="radio"
                  value="0"
                  id="turno-manha"
                  {...register("turno")}
                />
                Manhã
              </FormLabel>
              <FormLabel
                sx={{
                  display: "flex",
                  alignItems: "center",
                  ml: 1,
                }}
              >
                <Radio
                  type="radio"
                  value="1"
                  id="turno-tarde"
                  {...register("turno")}
                />
                Tarde
              </FormLabel>
              <FormLabel
                sx={{
                  display: "flex",
                  alignItems: "center",
                  ml: 1,
                }}
              >
                <Radio
                  type="radio"
                  value="2"
                  id="turno-noite"
                  {...register("turno")}
                />
                Noite
              </FormLabel>
            </Stack>
          </Grid>
        )}
        {matriculado === "sim" && (
          <Grid item xs={12} md={6}>
            <TextField
              label="Instituição de ensino matriculado"
              variant="outlined"
              sx={{
                width: "100%",
              }}
              id="candidato-instituicao"
              error={!!errors.instituicao}
              {...register("instituicao")}
            />
            <Typography variant="caption" color="error">
              {errors.instituicao?.message}
            </Typography>
          </Grid>
        )}

        {matriculado === "sim" && (
          <Grid item xs={12} md={6}>
            <TextField
              label="Curso"
              variant="outlined"
              sx={{
                width: "100%",
              }}
              id="candidato-curso"
              error={!!errors.curso}
              {...register("curso")}
            />
            <Typography variant="caption" color="error">
              {errors.curso?.message}
            </Typography>
          </Grid>
        )}

        <Grid item xs={12}>
          <Stack direction="column">
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  id="formulario-desafio"
                  {...register("desafios")}
                />
              }
              label="Por gostar de desafios"
            />

            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  id="formulario-problemas"
                  {...register("problemas")}
                />
              }
              label="Por gostar de resolver problemas"
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  id="formulario-reconhecimento"
                  {...register("reconhecimento")}
                />
              }
              label="Pelo reconhecimento e valorização financeira do profissional de tecnologia"
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  id="formulario-altruismo"
                  {...register("altruismo")}
                />
              }
              label="Por querer ajudar outras pessoas"
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  id="formulario-outro"
                  onChange={() => setAnotherReason((state) => !state)}
                />
              }
              label="Outro motivo"
            />
            <Typography variant="caption" color="error" sx={{ mb: 1 }}>
              {errors.motivo?.message}
            </Typography>
            {anotherReason && (
              <TextField
                label="Por qual motivo você se interessou pela área de tecnologia?"
                variant="outlined"
                multiline={true}
                sx={{
                  width: "100%",
                }}
                id="candidato-motivo"
                error={!!errors.motivo}
                {...register("motivo")}
              />
            )}
          </Stack>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label="Qual o link do seu repositorio no GitHub?"
            variant="outlined"
            sx={{
              width: "100%",
            }}
            id="candidato-github"
            InputProps={{
              startAdornment: (
                <Box display="flex" alignItems="center" mr={1}>
                  <GithubLogo size={20} color="#1f64ff" weight="fill" />
                </Box>
              ),
            }}
            error={!!errors.github}
            {...register("github")}
          />
          <Typography variant="caption" color="error">
            {errors.github?.message}
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            alignItems: {
              xs: "flex-start",
              md: "center",
            },
            gap: 1,
          }}
        >
          <Typography variant="body1">
            Deseja adicionar um currículo?
          </Typography>
          <Button variant="outlined" component="label">
            Adicionar
            <input
              hidden
              accept="application/pdf,application/vnd.ms-excel"
              multiple
              type="file"
              {...register("curriculo")}
            />
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained" id="candidate-formulario">
            Próximo
          </Button>
        </Grid>
      </Grid>
    </Stack>
  );
};
