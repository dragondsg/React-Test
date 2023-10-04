import "./App.css";
import { characterData } from "./characterData.js";
import { Header } from "./header.jsx";
import { CharacterRatings } from "./characterRatings.jsx";
import { CharacterCards } from "./characterCards.jsx";

function App() {
  return (
    <>
      <Header />
      <CharacterRatings character={ characterData } key={ characterData.name }/>
      <CharacterCards character={ characterData } key={ characterData.name }/>
    </>
  );
}

export default App;
