import React from 'react'
import PhotoCommentsForm from './PhotoCommentsForm'
import {UserContext} from '../../UserContext'
import styles from './PhotoComments.module.css'

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments) // o callback faz rodar apenas uma vez o estado inicial
  const commentsSection = React.useRef()

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight 
  },[comments])

  const {login} = React.useContext(UserContext)
  return (
    <>
      <ul ref={commentsSection} className={`${styles.comments} ${props.single ? styles.single : ''}`}>
        {comments.map(comment => <li key={comment.comment_ID}>
          <b>{comment.comment_author}:</b>
          <span>{comment.comment_content}</span>
        </li>)}
      </ul>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} single={props.single} />}
    </>
  )
}

export default PhotoComments