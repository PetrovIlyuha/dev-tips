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

  const handleDropdownChange = event => {
    setValues(prevInputs => {
      const newInputs = _.cloneDeep(prevInputs);
      _.set(newInputs, event.item.props.title, event.key);
      return newInputs;
    });
  };

  const handleAddRecommendation = event => {
    event.persist();
    setValues(inputs => {
      const sortedRecommendations = _.sortBy(values.recommendations, ["key"]);
      const key =
        sortedRecommendations.length > 0
          ? parseInt(
              sortedRecommendations[sortedRecommendations.length - 1].key + 1,
            )
          : 0;
      return {
        ...inputs,
        recommendations: _.concat(inputs.recommendations, [
          { key, content: "" },
        ]),
      };
    });
  };

  const handleDeleteRecommendation = event => {};

  return {
    values,
    handleInputChange,
    handleAddRecommendation,
    handleDeleteRecommendation,
    handleDropdownChange,
    handleSubmit,
  };
};
