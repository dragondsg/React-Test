export function CharacterRatings({ character }) {
  return (
    <>
      <section id="character-ratings">
        <h4>Top Characters</h4>
        <table>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
          {character
            .filter((obj) => {
              return "votes" in obj;
            })
            .sort((a, b) => {return b.votes-a.votes})
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
    </>
  )
}