import "./App.css";
import InputBox from "./components/InputBox";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar title="TEXTUTILS" About="About Us" />
      <InputBox heading="Enter The Text To Analyze" />
    </>
  );
}

export default App;
