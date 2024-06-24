import main from "./assets/style/main.module.scss";
import elevation from "./assets/style/elevation.module.scss";
import typography from "./assets/style/typography.module.scss";
import Select from "./components/Select/Select";
import { useState } from "react";
import QRGenerator01 from "./components/QRGenerator/QRGenerator01";
import QRGenerator02 from "./components/QRGenerator/QRGenerator02";
import QRGenerator03 from "./components/QRGenerator/QRGenerator03";
import QRGenerator04 from "./components/QRGenerator/QRGenerator04";

enum QR_GENERATOR {
  none = "Select QR Generator",
  qr1 = "QR Generator 01 (api.qrserver.com)",
  qr2 = "QR Generator 02 (qrcode.react)",
  qr3 = "QR Generator 03 (QRious)",
  qr4 = "QR Generator 04 (react-qr-code)",
}
const arrayVariants = Object.entries(QR_GENERATOR).map(([_, value]) => value);

function App() {
  const [selected, setSelected] = useState<string>();

  const renderSelectedComponent = () => {
    switch (selected) {
      case QR_GENERATOR.qr1:
        return <QRGenerator01 />;
      case QR_GENERATOR.qr2:
        return <QRGenerator02 />;
      case QR_GENERATOR.qr3:
        return <QRGenerator03 />;
      case QR_GENERATOR.qr4:
        return <QRGenerator04 />;
      default:
        return null;
    }
  };

  return (
    <div className={main.center}>
      <div className={elevation.LightElevationThird} style={{ width: "500px" }}>
        <h1
          className={typography.HeadlineLarge}
          style={{ textAlign: "center" }}
        >
          QR Generators
        </h1>
        <Select
          variants={arrayVariants}
          setOption={setSelected}
          width={"100%"}
        />
        {renderSelectedComponent()}
      </div>
    </div>
  );
}

export default App;
