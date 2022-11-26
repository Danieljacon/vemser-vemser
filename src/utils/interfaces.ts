export interface ICandidateForm {
  nome: string;
  email: string;
  telefone: string;
  rg: string;
  estado: string;
  cidade: string;
}

export interface IStepOneProps {
  nextFormStep?: () => void;
  formStep?: number;
}

export interface IFormCardProps {
  children?: React.ReactNode;
  currentStep: number;
  prevFormStep: () => void;
}

export interface ICandidateContext {
  setFormValues: (values: object) => void;
  data: object;
}

export interface IChildren {
  children: React.ReactNode;
}
