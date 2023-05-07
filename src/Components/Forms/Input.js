import React from 'react'
import styles from './Input.module.css'

const Input = ({label, type, name, value, onChange, onBlur, error}) => {
  return (
    <div className={styles.wrapper}>
        <label className={styles.label}>{label}</label>
        <input 
          className={styles.input}
          type={type} name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}

export default Input