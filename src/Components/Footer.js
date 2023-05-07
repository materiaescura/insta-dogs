import React from 'react'
import {ReactComponent as Dog} from '../Assets/dogs-footer.svg'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Dog />
      <p>Dogs. Alguns direitos reservados.</p>
    </div>
  )
}

export default Footer