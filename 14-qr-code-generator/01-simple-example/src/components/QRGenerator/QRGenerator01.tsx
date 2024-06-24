import { useState } from "react";
import styles from "./style.module.scss";
import buttons from "./../../assets/style/buttons.module.scss";
import { options } from "./options";
import { IoReload } from "react-icons/io5";
const QRGenerator01 = () => {
  const [value, setValue] = useState("");
  const [option, setOption] = useState("");

  const [qrUrl, setQrUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [blobUrl, setBlobUrl] = useState<Blob | null>(null);

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setQrUrl("");
    setLoading(false);
    setBlobUrl(null);
  };
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOption(e.target.value);
    setQrUrl("");
    setLoading(false);
    setBlobUrl(null);
  };

  const genetateQRCode = async () => {
    if (value !== "" && option !== "") {
      setLoading(true);

      const url = `https://api.qrserver.com/v1/create-qr-code/?data=${value}&size=${option}x${option}`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        setQrUrl(imageUrl);
        setBlobUrl(blob);
      } catch (error) {
        console.error("Error fetching QR code:", error);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please enter data");
    }
  };
  const downloadQRCode = () => {
    if (!blobUrl) return;
    const link = document.createElement("a");
    const url = URL.createObjectURL(blobUrl);
    link.href = url;
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
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
      <div className={styles.qrcode}>
        {loading && <IoReload className={styles.loading} size={40} />}
        {qrUrl && !loading && (
          <>
            <img src={qrUrl} alt="QR Code" />
            <button onClick={downloadQRCode} className={buttons.FilledButtons}>
              Download QR Code
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default QRGenerator01;
