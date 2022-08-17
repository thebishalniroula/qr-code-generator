import { useRef, useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import Qrcode from "./components/QRcode/Qrcode";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
function App() {
  const [url, setUrl] = useState<string | null>();
  const [size, setSize] = useState<number | null>();
  const [showQRcode, setShowQRcode] = useState<boolean>(false);
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <Hero />
      <div className="qr-container">
        <Form setUrl={setUrl} setSize={setSize} setShowQRcode={setShowQRcode} />
        {showQRcode && url && (
          <div className="qr">
            <Qrcode link={url} size={size} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
