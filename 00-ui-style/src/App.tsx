import styles from "./App.module.scss";
import typography from "./assets/style/typography.module.scss";
import elevation from "./assets/style/elevation.module.scss";
import buttons from "./assets/style/buttons.module.scss";

function App() {
  return (
    <>
      <main className={styles.container}>
        <h1>Стили</h1>
        <hr />

        <article>
          <h2>Typography</h2>
          <hr />
          <p className={typography.DisplayLarge}>DisplayLarge - Roboto 57/64 -0.25 </p>
          <p className={typography.DisplayMedium}>DisplayMedium - Roboto 45/52 . 0 </p>
          <p className={typography.DisplaySmall}>DisplaySmall - Roboto 36/44 . 0 </p>
          <hr />
          <p className={typography.HeadlineLarge}>HeadlineLarge - Roboto 32/40 . 0 </p>
          <p className={typography.HeadlineMedium}>HeadlineMedium - Roboto 28/36 . 0 </p>
          <p className={typography.HeadlineSmall}>HeadlineSmall - Roboto 24/32 . 0</p>
          <hr />
          <p className={typography.TitleLarge}>TitleLarge - Roboto Regular 22/28 . 0 </p>
          <p className={typography.TitleMedium}>TitleMedium - Roboto Medium 16/24 . +0.15 </p>
          <p className={typography.TitleSmall}>TitleSmall - Roboto Medium 14/20 . +0.1 </p>
          <hr />
          <p className={typography.LabelLarge}>LabelLarge - Roboto Medium 14/20 . +0.1 </p>
          <p className={typography.LabelMedium}>LabelMedium - Roboto Medium 12/16 . +0.5</p>
          <p className={typography.LabelSmall}>LabelSmall - Roboto Medium 11/16 . +0.5</p>
          <hr />
          <p className={typography.BodyLarge}>BodyLarge - Roboto 16/24 . +0.5 </p>
          <p className={typography.BodyMedium}>BodyMedium - Roboto 14/20 . +0.25 </p>
          <p className={typography.BodySmall}>BodySmall - Roboto 12/16 . +0.4 </p>
        </article>

        <article>
          <h2>Elevation</h2>
          <hr />
          <div className={styles.elevationLight}>
            <div className={elevation.LightElevationFirst}>LightElevationFirst</div>
            <div className={elevation.LightElevationSecond}>LightElevationSecond</div>
            <div className={elevation.LightElevationThird}>LightElevationThird</div>
            <div className={elevation.LightElevationFourth}>LightElevationFourth</div>
            <div className={elevation.LightElevationFifth}>LightElevationFifth</div>
          </div>
          <div className={styles.elevationDark}>
            <div className={elevation.DarkElevationFirst}>DarkElevationFirst</div>
            <div className={elevation.DarkElevationSecond}>DarkElevationSecond</div>
            <div className={elevation.DarkElevationThird}>DarkElevationThird</div>
            <div className={elevation.DarkElevationFourth}>DarkElevationFourth</div>
            <div className={elevation.DarkElevationFifth}>DarkElevationFifth</div>
          </div>
        </article>
        <article>
          <h2>Buttons</h2>
          <hr />
          <h3>FilledButtons:</h3>
          <div className={styles.row}>
            <button className={buttons.FilledButtons}>FilledButtons</button>
            <button className={buttons.FilledButtons} disabled>
              FilledButtons
            </button>
          </div>
          <h3>OutlinedButtons:</h3>
          <div className={styles.row}>
            <button className={buttons.OutlinedButtons}>OutlinedButtons</button>
            <button className={buttons.OutlinedButtons} disabled>
              OutlinedButtons
            </button>
          </div>
        </article>
      </main>
    </>
  );
}

export default App;
