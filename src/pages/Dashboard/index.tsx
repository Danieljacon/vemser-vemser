import React from "react";
import {
  Box,
  Grid,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";

export const Dashboard = () => {
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
              id="s1-candidato-nome"
              // error={!!errors.nome}
              // {...register("nome")}
            />
            {/* <Typography variant="caption" color="error">
              {errors.nome?.message}
            </Typography> */}
          </Grid>
          <Grid item xs={12} md={5}>
            <TextField
              label="Email"
              variant="outlined"
              sx={{
                width: "100%",
              }}
              id="s1-candidato-nome"
              // error={!!errors.nome}
              // {...register("nome")}
            />
            {/* <Typography variant="caption" color="error">
              {errors.nome?.message}
            </Typography> */}
          </Grid>
          <Grid item xs={12} md={2}>
            <Select
              native
              variant="outlined"
              sx={{ width: "100%" }}
              id="dashboard-search-perfil"
              // error={!!errors.estado}
              // {...register("estado")}
            >
              <option value="Administrador">Administrador</option>
              <option value="Colaborador">Colaborador</option>
            </Select>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};
