import { useState } from "react";
import "./InputBox.css";
// eslint-disable-next-line react/prop-types
const InputBox = ({ heading }) => {
  const handleupClick = () => {
    setText(text.toUpperCase());
  };
  const handleOnChnage = (e) => {
    setText(e.target.value);
  };

  const handlelowerCase = () => {
    setText(text.toLowerCase());
  };

  const handlespeak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
  };
  
  const handleClear = () => {
    setText(" ");
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <div className="mt-5">
          <hr />
          <h2 className="text-center">{heading}</h2>
          <hr />
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChnage}
            id="mybox"
            rows="10"
          ></textarea>
        </div>
        <div className="button text-center mt-4">
          <button className="btn btn-dark ms-2 my-1" onClick={handlelowerCase}>
            Convert To Lowercase
          </button>
          <button className="btn btn-dark ms-2 my-1" onClick={handleupClick}>
            Convert To UperCase
          </button>
          <button className="btn btn-dark ms-2 my-1" onClick={handleClear}>
            Clear Text
          </button>
          <button className="btn btn-dark ms-2 my-1" onClick={handleCopyText}>
            Copy Text
          </button>
          <button onClick={handlespeak} className="btn btn-dark ms-2">
            Speak
          </button>
        </div>
      </div>

      <div className="container mt-5">
        <hr />
        <h1 className="mb-3 text-center">Your Text Summary</h1>
        <hr />
        <div className="d-flex  flex-wrap justify-content-end align-items-center">
          <p className="text-end me-1">
            {
              text.split(/\s+/).filter((elem) => {
                return elem.length !== 0;
              }).length
            }{" "}
            words || {text.length} characters ||
          </p>
          <p className="text-end">
            {0.008 *
              text.split(" ").filter((elem) => {
                return elem.length !== 0;
              }).length}{" "}
            Min To Read
          </p>
        </div>
        <p className="p-3 mb-5 border shadow bg-light">
          {text.length > 0 ? text : "Nothing To Preview"}
        </p>
      </div>
    </>
  );
};

export default InputBox;
