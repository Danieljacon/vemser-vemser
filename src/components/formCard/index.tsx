import React from "react";
import {
  Box,
  Button,
  Typography,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { useCandidates } from "../../context/CandidatesContext";
import { IFormCardProps } from "../../utils/interfaces";

const steps: string[] = [
  "Informações Cadastrais",
  "Formulário de Inscrição",
  "Avaliação do Candidato",
];

export const FormCard = ({
  children,
  currentStep,
  prevFormStep,
}: IFormCardProps) => {
  return (
    <div>
      {currentStep < 3 && (
        <>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5" component="h1">
              {steps[currentStep]}
            </Typography>
          </Box>
          <Stepper activeStep={currentStep} sx={{ my: 2 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel sx={{
                  flexDirection: {
                    xs: "column",
                    sm: "row",
                  },
                  gap: {
                    xs: 1,
                    sm: 0,
                  }
                }}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {currentStep > 0 && (
            <Button onClick={prevFormStep} variant="outlined">
              Voltar
            </Button>
          )}
        </>
      )}
      {children}
    </div>
  );
};

export const FormCompleted = () => {
  const { data } = useCandidates();
  return (
    <div>
      <Typography>Você completou a inscrição! Aguarde o resultado.</Typography>
    </div>
  );
};
