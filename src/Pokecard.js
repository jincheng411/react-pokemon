import React, { Component } from 'react';
import './Pokecard.css'
class Pokecard extends Component {

  render() {

    let imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`
    return (
      <div className="Pokecard">
        <h1>{this.props.name}</h1>
        <div className="Pokecard-image">
          <img src={imgSrc} alt={this.props.name}></img>
        </div>
        <div className="Pokecard-data"> Type: {this.props.type}</div>
        <div className="Pokecard-data"> EPX: {this.props.exp}</div>
      </div>
    )
  }
}

export default Pokecard;