import React from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useFetch from '../../Hooks/useFetch'
import useForm from '../../Hooks/useForm'
import { PASSWORD_LOST } from '../../api'
import Error from '../../Helpers/Error'

const LoginPasswordLost = () => {
  const login = useForm()
  const {data, loading, error, request} = useFetch()

  const handleSubmit = async event => {
    event.preventDefault()
    if(login.validate()) {
      const {url, options} = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar')
      })
      const {json} = request(url, options)
      console.log(json)
    }
  }

  return (
    <section  className='animeLeft' style={{paddingTop: '4rem'}}>
      <h1 className='title'>Perdeu a senha?</h1>
      { data ?
        (<p>{data}</p> ) : (
        <form onSubmit={handleSubmit}>
        <Input
          label='Email / Usuário'
          name='login'
          {...login}
        />
          {loading ?
            <Button disabled>Enviando Email...</Button> :
            <Button>Enviar Email</Button>
          }
        </form> )}
      <Error error={error} />
    </section>
  )
}

export default LoginPasswordLost