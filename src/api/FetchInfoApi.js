import { useState, useEffect, useCallback } from 'react'
import { API_KEY, INFO_URL } from '../config'

// This function is called when the user click on any product, then it is redirected to pruduct details page
export const FetchInfoApi = spoonId => {
    const [state, setState] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const fetchData = useCallback(async () => {
        setError(false)
        setLoading(true)

        try {
            const endpoint = `${INFO_URL}${spoonId}?apiKey=${API_KEY}`
            // console.log(endpoint)
            const result = await (await fetch(endpoint)).json()
            // console.log(result)
            setState({
                ...result

            })
        } catch (error) {
            setError(true)
        }
        setLoading(false)
    }, [spoonId])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return [state, loading, error]
}