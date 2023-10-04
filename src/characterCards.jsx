import { Component } from "react";

export class CharacterCards extends Component {
  render () {
    const { character } = this.props;

    return (
      <>
        <section id="character-cards">
          {character.map((item) => (
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
    )
  }
}