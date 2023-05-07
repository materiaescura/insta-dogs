import React from 'react'
import {ReactComponent as Enviar} from '../../Assets/enviar.svg'
import Error from '../../Helpers/Error'
import useFetch from '../../Hooks/useFetch'
import { COMMENT_POST } from '../../api'
import styles from './PhotoCommentsForm.module.css'

const PhotoCommentsForm = ({id, setComments, single}) => {
    const [comment, setComment] = React.useState('')
    const {error, request} = useFetch()

    const handleChange = ({target}) => setComment(target.value)

    const handleSubmit = async event => {
        event.preventDefault()
        const {url, options} = COMMENT_POST(id, {comment})
        const {response, json}= await request(url, options)
        
        if(response.ok) {
            setComment('')
            console.log(json)
            setComments(comments => [...comments, json])
        }
    }

  return (
    <form className={`${styles.form} ${single ? styles.single : ''}`} onSubmit={handleSubmit}>
        <textarea
             className={styles.textarea}
             value={comment}
             id='comment'
             name='comment'
             placeholder='Comente...'
             onChange={handleChange}
         />
         <button className={styles.button}>
            <Enviar />
         </button>
         <Error error={error} />
    </form>
  )
}

export default PhotoCommentsForm