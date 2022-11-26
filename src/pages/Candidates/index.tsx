import { Box, Container } from "@mui/material";
import { useState } from "react";
import { FormCard, FormCompleted } from "../../components/formCard";
import { StepOne } from "../../components/steps";

// const steps: string[] = [
//   "Informações Cadastrais",
//   "Formulário de Inscrição",
//   "Avaliação do Candidato",
// ];

export const Candidates = () => {
  const [formStep, setFormStep] = useState<number>(0);

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          backgroundColor: "primary.light",
          padding: {
            xs: 2,
            sm: 3,
            md: 4,
          },
          margin: {
            xs: 1,
            sm: 3,
            md: 4,
          },
          borderRadius: {
            xs: 0,
            sm: 3,
          },
        }}
      >
        <>
          <Box>
            <Box>
              <FormCard currentStep={formStep} prevFormStep={prevFormStep}>
                {formStep >= 0 && (
                  <StepOne formStep={formStep} nextFormStep={nextFormStep} />
                )}

                {formStep >= 1 && (
                  <StepOne formStep={formStep} nextFormStep={nextFormStep} />
                )}

                {formStep > 2 && <FormCompleted />}
              </FormCard>
            </Box>
          </Box>
        </>
      </Box>
    </Container>
  );
};
