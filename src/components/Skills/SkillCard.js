import React from 'react';

const SkillCard = ({name, backgroundImage}) => {
  return (
    <div className='card-container'>
      <h1 className='skillName'>{name}</h1>
      <img src={backgroundImage} alt={name} className='skillImage' />
    </div>
  )
}

export default SkillCard;