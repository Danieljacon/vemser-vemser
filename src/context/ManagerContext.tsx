import { useState, createContext, useContext } from "react";
import { toast } from "react-toastify";
import { baseurl } from "../utils/baseurl";
import { useNavigate } from "react-router-dom";
import {
  IManagerContext,
  IChildren,
  IManagerLogin,
  IGestor,
} from "../utils/interfaces";
import nProgress from "nprogress";
import axios from "axios";

export const ManagerContext = createContext({} as IManagerContext);
export const ManagerProvider = ({ children }: IChildren) => {
  const navigate = useNavigate();

  const [gestorDadosLogin, setGestorDadosLogin] = useState({});

  const handleUserlogin = async (user: IManagerLogin) => {
    nProgress.start();
    try {
      await axios.post(`${baseurl}/Gestor`, user).then((response) => {
        setGestorDadosLogin(response.data);
        localStorage.setItem("token", "asd");
        navigate("/dashboard");
      });
    } catch (error: any) {
      error?.response.status === 400 && toast.error("Email ou senha inválidos");
    } finally {
      nProgress.done();
    }
  };

  const createNewManager = async (manager: IGestor) => {
    nProgress.start();
    try {
      await axios
        .post(`${baseurl}/Gestor/cadastro`, manager)
        .then(() => {
          toast.success("Usuário cadastrado com sucesso");
          navigate("/dashboard");
        });
    } catch (error) {
      toast.error("Erro ao cadastrar usuário");
    } finally {
      nProgress.done();
    }
  };

  return (
    <ManagerContext.Provider
      value={{ gestorDadosLogin, handleUserlogin, createNewManager }}
    >
      {children}
    </ManagerContext.Provider>
  );
};

export const useManager = () => useContext(ManagerContext);
