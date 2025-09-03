import { useState } from "react";
import HomePage from "./views/HomePage";

function App() {
  const [isHomePageVisible, setIsHomePageVisible] = useState(true);

  return <>{isHomePageVisible && <HomePage />}</>;
}

export default App;
