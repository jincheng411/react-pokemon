import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css'
class Pokedex extends Component {

  render() {
    return (
      <div className="Pokedex">
        <p>Total EXP: {this.props.exp}</p>
        <p>{ this.props.isWinner ? 'WINNER' : 'LOSSER' }</p>
        <div className="Pokedex-cards">
          {this.props.pokemon.map((p) => (
          <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
          ))}
        </div>
      </div>
    )
  }
}

export default Pokedex;