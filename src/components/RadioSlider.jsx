import React from "react";
import "./RadioSlider.css";
export default function RadioSlider({ options, name, onChange }) {
  let handleChange = (event) => {
    onChange(event.target.value);
  };
  return (
    <div className="radio-slider">
      {options.map(({ placeholder, value }, idx) => {
        return (
          <React.Fragment key={`frag${placeholder}`}>
            <input
              key={`input${placeholder}`}
              onChange={handleChange}
              type="radio"
              name={name}
              id={placeholder}
              value={value}
            />
            <label key={`label${placeholder}`} htmlFor={placeholder}>
              {placeholder}
            </label>
          </React.Fragment>
        );
      })}
    </div>
  );
}
