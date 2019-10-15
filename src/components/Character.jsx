import React from 'react'
import './styles/Character.css'

const Character = ({character}) => {
  return (
    <div className="CharacterCard" style={{ backgroundImage: `url(${character.image})` }}>
      <div className="CharacterCard__name-container text-truncate">
        {character.name}
      </div>
    </div>
  )
}

export default Character
