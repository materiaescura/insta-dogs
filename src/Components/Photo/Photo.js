import React from 'react'
import { useParams } from 'react-router-dom'
import { PHOTO_GET } from '../../api'
import PhotoContent from './PhotoContent'
import useFetch from '../../Hooks/useFetch'
import Error from '../../Helpers/Error'
import Loading from '../../Helpers/Loading'

const Photo = () => {
  const {id} = useParams()
  const {data, loading, error, request}  = useFetch()

  React.useEffect(() => {
    
    const fetchPhoto = async () => {
      const {url, options} = PHOTO_GET(id)
      await request(url, options)
    }

    fetchPhoto()
  }, [request, id])

  if(error) return <Error error={data} />
  if(loading) return <Loading />
  if(data) return (
    <section className='container mainContainer'>
      <PhotoContent data={data} single={true} />
    </section>
  )
}

export default Photo