import logo from "./logo.svg";

import { Header } from "./component/Header";
import { Footer } from "./component/Footer";
import { Landing } from "./pages/landing";
import "./Style.css";
import { Box } from "@mui/material";

function App() {
  return (

      <Box className="App">
        <Header />
        <Landing />
        <Footer />
      </Box> 
  );
}

export default App;
