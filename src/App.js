import TstButton from "./Components/Framework/TstButton";
import TstHeading from "./Components/Framework/TstHeading";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { deepOrange, purple } from "@mui/material/colors";
import { CssBaseline } from "@mui/material";
import { useState } from "react";

const App = () => {
  const [mode, setMode] = useState('light');
  const theme = createTheme({
    palette: {
      mode,
      ...(mode === 'light' ?
        {
          primary: {
            main: purple[500],
          }
        } :
        {
          primary: deepOrange,
        }
      )

    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <TstButton variant='contained' onClick={() => setMode(mode => mode === 'light' ? 'dark' : 'light')} size='small'>Hello world</TstButton>
        <TstHeading variant={"h6"}>
          Hello I am jayeen.
        </TstHeading>
      </div>
    </ThemeProvider>
  );
}

export default App;
