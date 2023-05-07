import React from 'react'
import { useParams } from 'react-router-dom'
import Feed from '../Feed/Feed'

const UserProfile = () => {
  const {user} = useParams()

  //perguntar se tem uma api com os usuários cadastrados

  return (
    <div className='container mainSection'>
        <h1 className='title'>{user}</h1>
        <Feed user={user} />
    </div>
  )
}

export default UserProfile