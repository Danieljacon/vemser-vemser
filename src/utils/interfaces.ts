export interface ILogin {
  email: string;
  password: string;
}

export interface ICandidateForm {
  nome: string;
  email: string;
  telefone: string;
  rg: string;
  estado: string;
  cidade: string;
  cpf: string;
}

export interface IInscriptionForm {
  matriculado: string;
  curso: string;
  instituicao: string;
  turno: string;
  github: string;
  desafios: boolean;
  problemas: boolean;
  reconhecimento: boolean;
  altruismo: boolean;
  motivo: string;
  curriculo: string;
  lgpd: boolean,
}

export interface IDrawerContainerProps {
  children: React.ReactNode;
  window?: () => Window;
}

export interface IStepProps {
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
