import React from 'react'
import FeedPhotosItem from './FeedPhotosItem'
import useFetch from '../../Hooks/useFetch'
import { PHOTOS_GET } from '../../api'
import Error from '../../Helpers/Error'
import Loading from '../../Helpers/Loading'
import styles from './FeedPhotos.module.css'

const FeedPhotos = ({user, page, setInfinite, setModalPhoto}) => {
    const {data, loading, error, request} = useFetch()

    React.useEffect(() => {
        const fetchPhotos = async total => {
            const {url, options} = PHOTOS_GET({page, total, user})
            const {response, json} = await request(url, options)
            if(response && response.ok && json.length < total) setInfinite(false)
            console.log(response)
        }
        fetchPhotos(6)
    }, [request, user, page, setInfinite])

  if(error) return <Error error={error} />
  if(loading) return <Loading />
  if(data)
  return (
    <div className={`${styles.feed} animeLeft`}>
        {data.map(photo =>  <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto} />)}
    </div>
  )
  else return null
}

export default FeedPhotos