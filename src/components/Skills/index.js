import React, { Component } from 'react';
import SkillCard from './SkillCard';
import { skills } from '../../data';

class Skills extends Component {
  render() {
    console.log('Skills map', skills);
    const displaySkills = skills.map(skill => {
      return <SkillCard key={skill.id} name={skill.name} backgroundImage={skill.backgroundImage} />
    });
    return (
      <div className='skills-container'>
        {displaySkills}
      </div>
    )
  }
}

export default Skills;