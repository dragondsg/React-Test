import "./App.css";
import { characterData } from "./characterData.js";

function App() {
  return (
    <>
      <header>
        <h1>Fullmetal Alchemist</h1>
        <nav>
          <li>about us</li>
          <li>info</li>
          <li>support us</li>
        </nav>
      </header>
      <section id="character-ratings">
        <h4>Top Characters</h4>
        <table>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
          {characterData
            .filter((obj) => {
              return "votes" in obj;
            })
            .map((item, index) => {
              let rowCol = "light";
              if (index % 2 == 0) {
                rowCol = "dark";
              }

              return (
                <tr className={rowCol} key={item.name2}>
                  <td>{item.name2}</td>
                  <td>{item.skillset}</td>
                  <td>{item.votes}</td>
                </tr>
              );
            })}
        </table>
      </section>

      <section id="character-cards">
        {characterData.map((item) => (
          <div className="card">
            <div className="card-titles">
              <h3>{item.name}</h3>
              <h4>{item.nickname}</h4>
            </div>
            <img src={item.imageUrl} alt="" />
            <p>{item.description}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default App;
