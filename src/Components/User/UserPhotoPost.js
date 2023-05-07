import React from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import Error from '../../Helpers/Error'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import styles from './UserPhotoPost.module.css'
import { PHOTO_POST } from '../../api'
import { useNavigate } from 'react-router-dom'

const UserPhotoPost = () => {
  const nome = useForm()
  const idade = useForm('number')
  const peso = useForm('number')
  const [img, setImg] = React.useState({})
  const {data, error, loading, request} = useFetch()

  const navigate = useNavigate()

  React.useEffect(() => {
    if(data) navigate('/conta')
  },[navigate, data])

  const handleSubmit = event => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('img', img.raw)
    formData.append('nome', nome.value)
    formData.append('idade', idade.value)
    formData.append('peso', peso.value)

    const token = window.localStorage.getItem('token')
    const {url, options} = PHOTO_POST(formData, token)
    request(url, options).then(console.log)
  }
  const handleImgChange = ({target}) => {
    setImg({
      raw: target.files[0],
      preview: URL.createObjectURL(target.files[0])
    })
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input  label='Nome' type='text' name='nome' {...nome} />
        <Input  label='Idade' type='number' name='idade' {...idade} />
        <Input  label='Peso' type='number' name= 'peso' {...peso} />
        <Input className={styles.file} type='file' name='img' id='img' onChange={handleImgChange} />
        {
          loading ?
          <Button disabled>Enviando...</Button> :
          <Button>Enviar</Button>
        }
        {error && <Error error={error} />}
      </form>
      <div>
        {img.preview && <div className={styles.preview} style={{backgroundImage:`url('${img.preview}')`}}></div>}
      </div>
    </section>
  )
}

export default UserPhotoPost