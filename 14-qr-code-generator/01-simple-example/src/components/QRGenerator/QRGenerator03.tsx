import { useState } from "react";
import styles from "./style.module.scss";
import buttons from "./../../assets/style/buttons.module.scss";
import { options } from "./options";
import { useQrious } from "react-qrious";

const QRGenerator04 = () => {
  const [value, setValue] = useState("");
  const [option, setOption] = useState("");
  const [isQrGenerated, setIsQrGenerated] = useState(false);
  const [dataUrl, _qrious] = useQrious({
    value,
    size: +option,
  });

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setIsQrGenerated(false);
  };
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOption(e.target.value);
    setIsQrGenerated(false);
  };

  const genetateQRCode = () => {
    if (value !== "" && option !== "") {
      setIsQrGenerated(true);
    } else {
      alert("Please enter data");
    }
  };
  const downloadQRCode = () => {
    if (dataUrl) {
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "qr-code.png";
      link.click();
    }
  };
  return (
    <div>
      <p className={styles.text}>Paste a url or enter text to create QR code</p>
      <input
        onChange={handleValue}
        value={value}
        className={styles.input}
        type="text"
      />
      <select
        onChange={handleSelect}
        defaultValue={option}
        className={styles.select}
        name="size"
      >
        {options.map((item, index) => (
          <option key={index} value={item.value}>
            {item.text}
          </option>
        ))}
      </select>

      <button
        onClick={genetateQRCode}
        className={`${buttons.FilledButtons} ${styles.btn}`}
      >
        Generate QR Code
      </button>
      {isQrGenerated && (
        <>
          <div className={styles.qrcode}>
            <img src={dataUrl} />
            <button onClick={downloadQRCode} className={buttons.FilledButtons}>
              Download QR Code
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default QRGenerator04;
