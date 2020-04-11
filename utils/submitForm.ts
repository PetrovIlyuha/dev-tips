import { useState } from "react";
import * as _ from "lodash";

export const submitForm = (initialValues, callback) => {
  const [values, setValues] = useState(initialValues);

  const handleSubmit = event => {
    if (event) event.preventDefault();
    callback();
    setValues(() => ({ ...initialValues }));
  };

  const handleInputChange = event => {
    event.persist();
    setValues(prevInputs => {
      const newInputs = _.cloneDeep(prevInputs);
      _.set(newInputs, event.target.name, event.target.value);
      return newInputs;
    });
  };

  return {
    values,
    handleInputChange,
    handleSubmit,
  };
};
