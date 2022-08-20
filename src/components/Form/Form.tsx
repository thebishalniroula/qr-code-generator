import React, { useRef } from "react";
import "./form.css";

type Props = {
  setUrl: React.Dispatch<React.SetStateAction<string | null | undefined>>;
  setSize: React.Dispatch<React.SetStateAction<number | null | undefined>>;
  setShowQRcode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Form = (props: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!inputRef.current?.value) {
      inputRef.current?.classList.add("animate");
      inputRef.current?.focus();
      setTimeout(() => {
        inputRef.current?.classList.remove("animate");
      }, 300);
    }
    const url = inputRef.current?.value;
    const size = parseInt(selectRef.current?.value!);
    props.setUrl(() => url);
    props.setSize(() => size);
    props.setShowQRcode(() => true);
  };
  return (
    <form className="form">
      <label htmlFor="url">Enter url</label>
      <input
        required
        type="text"
        className="inpput-field"
        name="url"
        placeholder="Eg. http://bishalniroula.com"
        ref={inputRef}
      />
      <select name="size" ref={selectRef}>
        <option value="300">300 X 300</option>
        <option value="400">400 X 400</option>
        <option value="500">500 X 500</option>
        <option value="600">600 X 600</option>
        {/* <option value="700">700 X 700</option> */}
      </select>
      <button type="submit" onClick={handleSubmit}>
        Generate QR
      </button>
    </form>
  );
};

export default Form;
