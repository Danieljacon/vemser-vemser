import { useState, createContext, useContext } from "react";
import { toast } from "react-toastify";

import { baseurl } from "../utils/baseurl";
import { useNavigate } from "react-router-dom";
import nProgress from "nprogress";
import axios from "axios";

export interface IManagerContext {
  gestorDadosLogin: object;
  handleUserlogin: (user: IManagerLogin) => Promise<void>;
}

export interface IChildren {
  children: React.ReactNode;
}

export interface IManagerLogin {
  email: string;
  senha: string;
}

export const ManagerContext = createContext({} as IManagerContext);
export const ManagerProvider = ({ children }: IChildren) => {
  const navigate = useNavigate();

  const [gestorDadosLogin, setGestorDadosLogin] = useState({});

  const handleUserlogin = async (user: IManagerLogin) => {
    nProgress.start();
    try {
      await axios.post(`${baseurl}Gestor`, user).then((response) => {
        setGestorDadosLogin(response.data);
        localStorage.setItem("token", "asd");
        navigate("/dashboard");
      });
    } catch (error: any) {
      // if error = 400
      error?.response.status === 400 && toast.error("Email ou senha inválidos");
    } finally {
      nProgress.done();
    }
  };

  return (
    <ManagerContext.Provider value={{ gestorDadosLogin, handleUserlogin }}>
      {children}
    </ManagerContext.Provider>
  );
};

export const useManager = () => useContext(ManagerContext);
