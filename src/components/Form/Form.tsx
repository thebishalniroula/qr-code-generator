import React from "react";
import "./form.css";
const Form: React.FC = () => {
  const handleSubmit = () => {
    // e.preventDefault();
  };
  return (
    <form className="form">
      <label htmlFor="url">Enter url</label>
      <input
        type="text"
        className="inpput-field"
        name="url"
        placeholder="Eg. http://bishalniroula.com"
      />
      <select name="size">
        <option value="300 X 300">300 X 300</option>
        <option value="400 X 400">400 X 400</option>
        <option value="500 X 500">500 X 500</option>
        <option value="600 X 600">600 X 600</option>
        <option value="700 X 700">700 X 700</option>
      </select>
      <button type="submit" onClick={handleSubmit}>
        Generate QR
      </button>
    </form>
  );
};

export default Form;
