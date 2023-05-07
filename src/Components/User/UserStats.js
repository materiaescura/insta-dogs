import React from 'react'
import useFetch from '../../Hooks/useFetch'
import { STATS_GET } from '../../api'
import Loading from '../../Helpers/Loading'
import Error from '../../Helpers/Error'
import Head from '../../Helpers/Head'

const UserStatsGraphs = React.lazy(() => import ('./UserStatsGraphs'))

const UserStats = () => {
  const {data, loading, error, request} = useFetch()

  React.useEffect(() => {
    const {url, options} = STATS_GET()
    request(url, options)
  },[request])

  if(loading) return <Loading />
  if(error) <Error error={error} />
  if(data) return (
    <React.Suspense fallback={<div></div>}>
      <div>
        <Head title='Estatísticas' />
        <UserStatsGraphs data={data}/>
      </div>
    </React.Suspense>
  )
  
}

export default UserStats