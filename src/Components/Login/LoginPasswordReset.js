import React from 'react'
import Input from '../Forms/Input'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import Button from '../Forms/Button'
import { PASSWORD_RESET } from '../../api'
import { useNavigate } from 'react-router-dom'
import Error from '../../Helpers/Error'

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState(null)
  const [key, setKey] = React.useState(null)

  const reset = useForm()
  const {loading, error, request} = useFetch()
  const navigate = useNavigate()

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const login = params.get('login')
    const key = params.get('key')
    if(login) setLogin(login)
    if(key) setKey(key)
  }, [])

  const handleSubmit = async event => {
    event.preventDefault()
    const {url, options} = PASSWORD_RESET({
      login,
      key,
      password: reset.value
    })

    const {response} = await request(url, options)
    if(response.ok) navigate('/conta')
  }

  return (
    <section className='animeLeft'>
     <h1 className='title'>Reset a Senha</h1>
     <form onSubmit={handleSubmit}>
      <Input
          label='Nova Senha'
          type='password'
          name='password'
          {...reset}
        />
        {
          loading ?
          <Button disabled>Resetando a senha...</Button> :
          <Button>Resetar</Button>
        }
     </form>
     <Error error={error} />
    </section>
  )
}

export default LoginPasswordReset