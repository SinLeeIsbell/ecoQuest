import React, { createContext, useState, useContext, useEffect } from "react";

const FormContext = createContext();

export function FormProvider({ children }) {
  const [formVisible, setFormVisible] = useState(true);
  const [emissionTotal, setEmissionTotal] = useState(0);

  useEffect(() => {
    console.log(emissionTotal);
  }, [emissionTotal]);

  const toggleFormVisibility = () => {
    setFormVisible((prevFormVisible) => !prevFormVisible);
  };

  return (
    <FormContext.Provider
      value={{
        formVisible,
        toggleFormVisibility,
        setEmissionTotal,
        emissionTotal,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  return useContext(FormContext);
}
