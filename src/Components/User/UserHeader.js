import React from 'react'
import UserHeaderNav from './UserHeaderNav'
import styles from './UserHeader.module.css'
import { useLocation } from 'react-router-dom'

const UserHeader = () => {
  const [title, setTitle] = React.useState(null)
  const location = useLocation()


  React.useEffect(() => {
    const routesToTitle = {
      '/conta/postar': 'Poste Sua Foto',
      '/conta/estatisticas': 'Estatísticas',
      '/conta': 'Minha Conta'
    }
    setTitle(routesToTitle[location.pathname])
  }, [location])

  return (
    <header className={`${styles.header}`}>
        <h1 className='title'>{title}</h1>
        <UserHeaderNav />
    </header>
  )
}

export default UserHeader