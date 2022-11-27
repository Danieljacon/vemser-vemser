import React from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { dashboardSearchSchema } from "../../utils/schemas";
import { ISearchColaborators } from "../../utils/interfaces";

export const Dashboard: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISearchColaborators>({
    resolver: yupResolver(dashboardSearchSchema),
  });

  const handleSearch = (data: ISearchColaborators) => {
    console.log(data);
  };

  return (
    <Box component="main" maxWidth="lg" m="0 auto">
      <Paper
        elevation={2}
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
        component="form"
        onSubmit={handleSubmit(handleSearch)}
      >
        <Typography variant="h6" component="h2">
          Buscar
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <TextField
              label="Nome"
              variant="outlined"
              sx={{
                width: "100%",
              }}
              id="dashboard-buscar-nome"
              error={!!errors.nome}
              {...register("nome")}
            />
            <Typography variant="caption" color="error">
              {errors.nome?.message}
            </Typography>
          </Grid>
          <Grid item xs={12} md={5}>
            <TextField
              label="Email"
              variant="outlined"
              sx={{
                width: "100%",
              }}
              id="dashboard-buscar-email"
              error={!!errors.email}
              {...register("email")}
            />
            <Typography variant="caption" color="error">
              {errors.email?.message}
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Select
              native
              variant="outlined"
              sx={{ width: "100%" }}
              id="dashboard-buscar-cargo"
              {...register("cargo")}
            >
              <option value="Administrador">Administrador</option>
              <option value="Colaborador">Colaborador</option>
            </Select>
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          sx={{
            width: {
              xs: "100%",
              md: "fit-content",
            },
            mt: 0.5,
          }}
          id="dashboard-buscar-buscar"
        >
          Buscar
        </Button>
      </Paper>
    </Box>
  );
};
