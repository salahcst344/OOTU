import { useTranslation } from "react-i18next";
import PageLayout from "./containers/PageLayout";
import Routes from "./Routes";
import { typography } from "./theme";

function App() {
  // eslint-disable-next-line
  const [_, i18] = useTranslation();
  const fontFamily =
    i18.language === "en" ? typography.en.fontFamily : typography.ar.fontFamily;
  const direction = i18.language === "en" ? "ltr" : "rtl";

  return (
    <div style={{ fontFamily, direction }}>
      <PageLayout>
        <Routes />
      </PageLayout>
    </div>
  );
}

export default App;
