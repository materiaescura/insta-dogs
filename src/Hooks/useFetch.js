import React from 'react'

const useFetch = () => {
    const [data, setData] = React.useState(null)
    const [error, setError] = React.useState(null)
    const [loading, setLoading] = React.useState(false)

    const request = React.useCallback(async (url, options, fetchData = {}) => { 
    
        try {
            setError(null)
            setLoading(true)
            fetchData.response = await fetch(url, options)
            fetchData.json = await fetchData.response.json()
            if(!fetchData.response.ok) throw new Error(fetchData.json.message)
        } catch (error) {
            fetchData.json = null
            setError(error.message)
        } finally {
            setData(fetchData.json)
            setLoading(false)
            return fetchData
        }
    }, [])

    return {
        data,
        error,
        loading,
        request
    }
}

export default useFetch