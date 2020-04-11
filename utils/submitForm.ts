import { useState } from "react";

export const submitForm = (initialValues, callback) => {
  const [values, setValues] = useState(initialValues);

  const handleSubmit = event => {
    if (event) event.preventDefault();
    callback();
    setValues(() => ({ ...initialValues }));
  };

  return {
    values,
    handleSubmit,
  };
};
