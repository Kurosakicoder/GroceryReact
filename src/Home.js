import React from 'react'
import { API_KEY, DEMO_URL, SEARCH_BASE_URL } from '../src/config'
import { FetchHomeApi } from './api/FetchHomeApi'
import SearchBar from './elements/SearchBar'
import Grid from './elements/Grid'
import SpoonThumb from './elements/SpoonThumb'

const Home = () => {

    const [{ state, loading, error }, fetchHomeProduct] = FetchHomeApi()
    // console.log(state)

    //While you are not searching any product, demo url date is shown by default
    const searchSpoons = search => {
        const endpoint = search ? `${SEARCH_BASE_URL}${search}&apiKey=${API_KEY}` : DEMO_URL
        fetchHomeProduct(endpoint)
    }

    if (!state.spoons[0]) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return (
        <React.Fragment>
            <div style={{ paddingTop: '15px' }}>
                <div className="container">
                    <h3 className="display-5 text-muted">Spoonacular Grocery Products</h3>
                </div>
            </div>
            <SearchBar callback={searchSpoons} />
            <br></br>
            <Grid>
                {/* Making sure that it is clickable  */}
                {state.spoons.map(spoon => (
                    <SpoonThumb
                        key={spoon.id}
                        clickable
                        spoonId={spoon.id}
                        spoonName={spoon.title}
                    />
                ))}
            </Grid>

        </React.Fragment>
    )
}

export default Home
