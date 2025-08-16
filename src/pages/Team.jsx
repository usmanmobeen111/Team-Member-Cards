import React from 'react'
import { teamData } from '../data/teamData'
import TeamCard from '../components/TeamCard'

const Team = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {teamData.map((member) => (
          <TeamCard key={member.id} {...member} />
        ))}
      </div>
    </div>
  )
}

export default Team
