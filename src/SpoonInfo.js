import React from 'react';
import { FetchInfoApi } from './api/FetchInfoApi'
import SpoonDetails from './elements/SpoonDetails';

const SpoonInfo = ({ spoonId }) => {
    // This functions show the product details page
    const [spoon, loading, error] = FetchInfoApi(spoonId)
    // console.log(spoon)
    if (error) {
        return <div>Something went wrong ...</div>
    }

    if (loading) {
        return '..Loading'
    }

    return (
        <>
            <SpoonDetails
                // image={spoon.image[0]}
                title={spoon.title}
                description={spoon.description}
                spoonacular_score={spoon.spoonacular_score}
                ingredientList={spoon.ingredientList}
                ingredientCount={spoon.ingredientCount}
                noofservings={spoon.number_of_servings}
                price={spoon.price}
                likes={spoon.likes}
            />
        </>
    )

}

export default SpoonInfo 