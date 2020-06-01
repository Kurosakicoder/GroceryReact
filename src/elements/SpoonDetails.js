import React from 'react';

// Product details display function
const SpoonDetails = ({ title, description, spoonacular_score, ingredientList, ingredientCount, noofservings, price, likes }) => {
    return (
        <div className="card mb-3" style={{ maxWidth: '1920px' }}>
            <div className="jumbotron" style={{ background: 'rgba(228, 231,235, 1)' }}>
                <div className="container">
                    <h1 class="display-4">Product Details</h1>
                </div>
            </div>
            <div className="row ">
                <div className="col-md-6">
                    <h3 className="card-title" style={{ textAlign: 'justify', paddingLeft: '10px', paddingRight: '10px', paddingTop: '10px' }}>{title}</h3>
                    <p className="card-text text-muted" style={{ textAlign: 'justify', padding: '15px' }}><b style={{ fontSize: '18px' }}>Description: </b>{description || 'No description...'}</p>
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h3>Details</h3>
                        <hr></hr>
                        <p className="card-text mb-2 text-muted" style={{ fontSize: '18px', textAlign: 'left' }}><strong>Price:</strong> {price}</p>
                        <p className="card-text mb-2 text-muted" style={{ fontSize: '18px', textAlign: 'left' }}><strong>Likes:</strong> {likes}</p>
                        <p className="card-text mb-2 text-muted" style={{ fontSize: '18px', textAlign: 'left' }}><strong>Spoonacular Score:</strong> {spoonacular_score}</p>
                        <p className="card-text mb-2 text-muted" style={{ fontSize: '18px', textAlign: 'left' }}><strong>Ingredients List:</strong> {ingredientList}</p>
                        <p className="card-text mb-2 text-muted" style={{ fontSize: '18px', textAlign: 'left' }}><strong>Ingredients Count:</strong> {ingredientCount}  </p>
                        <p className="card-text mb-2 text-muted" style={{ fontSize: '18px', textAlign: 'left' }}><strong>Number of Servings:</strong> {noofservings}</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpoonDetails