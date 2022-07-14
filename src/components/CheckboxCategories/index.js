import React from "react";
import PropTypes from "prop-types";
//Component
import { Wrapper } from "./CheckboxCategories.styles";

const CheckboxCategories = ({  flag, setFlag, setCategorie, categorie, label }) => {
  //Function to handle checkboxe
  const handleCheckbox = (event, flag, setFlag, setCategorie) => {
    if (flag) {
      setCategorie((prev) => [...prev, event.target.value]);
    } else {
      setCategorie((prev) =>
        prev.filter((words) => words !== event.target.value)
      );
    }
    setFlag(!flag);
  };

  return (
    <Wrapper>
      <input
        type="checkbox"
        id={categorie}
        value={categorie}
        onChange={(event) => {
          handleCheckbox(
            event,
            flag,
            setFlag,
            setCategorie
          );
        }}
      />
      <label for={categorie}>{label}</label>
    </Wrapper>
  );
};

Text.propTypes = {
    flag:  PropTypes.bool,
    setFlag:  PropTypes.func,
    setCategorie:  PropTypes.func,
    categorie:  PropTypes.string,
    label:  PropTypes.string,
};

export default CheckboxCategories;
