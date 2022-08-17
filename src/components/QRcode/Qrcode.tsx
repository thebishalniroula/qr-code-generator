import { QRCode } from "react-qrcode-logo";
import "./Qrcode.css";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import { useRef } from "react";
type Props = {
  link: string | null | undefined;
  size: number | null | undefined;
  colorDark?: string;
  colorLight?: string;
};

const Qrcode = (props: Props) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const downloadImage = () => {
    htmlToImage
      .toJpeg(imageRef.current as HTMLElement, { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "qrcode";
        link.href = dataUrl;
        link.click();
      });
  };

  return (
    <div className="qrcode">
      <div ref={imageRef}>
        <QRCode value={props.link!} size={props.size!} />
      </div>
      <button onClick={downloadImage} className="share-btn">
        <img src="/download.ico" />
        Downlaod
      </button>
    </div>
  );
};

export default Qrcode;
