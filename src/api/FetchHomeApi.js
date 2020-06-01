import { useState, useEffect } from 'react';
import { DEMO_URL } from '../config'

// HOME PAGE DEMO URL automatically fetched on default
// The function belows fetches the data of demo url which is then imported by Home.js
export const FetchHomeApi = () => {
    const [state, setState] = useState({ spoons: [] })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchHome = async endpoint => {
        setError(false)
        setLoading(true)

        try {
            const result = await (await fetch(endpoint)).json();
            console.log(result)
            setState(prev => ({
                ...prev,
                spoons: [...result.results]
            }))
        } catch (error) {
            setError(true)
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchHome(DEMO_URL)
    }, [])

    return [{ state, loading, error }, fetchHome]
}
