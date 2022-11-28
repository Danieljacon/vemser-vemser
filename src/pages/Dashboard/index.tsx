import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  Select,
  TextField,
  Typography,
  Stack,
  Pagination
} from "@mui/material";
import { useForm } from "react-hook-form";
import { ISearchColaborators } from "../../utils/interfaces";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "../../utils/fakeApi";

export const Dashboard: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
  } = useForm<ISearchColaborators>();

  const { nome, email } = watch();

  const handleSearch = (data: ISearchColaborators) => {
    console.log(data);
  };

  const columns = [
    { field: "nome", headerName: "Nome", width: 200 },
    { field: "email", headerName: "Email", minWidth: 220, flex: 1 },
    { field: "cargo", headerName: "Cargo", width: 120 },
  ];

  return (
    <Stack
      direction={{
        xs: "column",
        lg: "row",
      }}
      spacing={3}
      component="main"
      maxWidth="lg"
      m="0 auto"
    >
      <Paper
        elevation={2}
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          gap: 1,
          maxWidth: "400px"
        }}
        component="form"
        onSubmit={handleSubmit(handleSearch)}
      >
        <Typography variant="h6" component="h2">
          Buscar
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Nome"
              variant="outlined"
              sx={{
                width: "100%",
              }}
              id="dashboard-buscar-nome"
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
              id="dashboard-buscar-email"
              {...register("email")}
            />
          </Grid>
          <Grid item xs={12}>
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
          disabled={!nome && !email}
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

      <Box sx={{ height: "470px", width: "100%", display: "flex", flexDirection: "column" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          hideFooterPagination

        />
        <Pagination count={10} color="primary" size="small"
        sx={{
          mt: "-40px",
          mx: "auto"
        }} />
      </Box>
    </Stack>
  );
};
