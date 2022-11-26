import { useState, createContext, useContext } from "react";

interface ICandidateContext {
  setFormValues: (values: object) => void;
  data: object;
}

interface IChildren {
  children: React.ReactNode;
}

export const CandidatesContext = createContext({} as ICandidateContext);

export const CandidatesProvider = ({ children }: IChildren) => {
  const [data, setData] = useState({});

  const setFormValues = (values: object) => {
    setData((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };

  return (
    <CandidatesContext.Provider value={{ setFormValues, data }}>
      {children}
    </CandidatesContext.Provider>
  );
};

export const useCandidates = () => useContext(CandidatesContext);
