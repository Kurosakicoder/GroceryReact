import React from 'react';
import { Link } from '@reach/router'
import { StyledSpoonThumb } from '../styles/StyledSpoonThumb'

// Individual Product Item display function
const SpoonThumb = ({ spoonId, spoonName, clickable }) => {
    return (
        <StyledSpoonThumb>
            {
                clickable ?
                    (
                        <div style={{ background: 'rgba(228, 231,235, 1)', padding: '15px' }}>
                            <Link to={`${spoonId}`}>
                                <p style={{ textAlign: 'left', fontFamily: 'Lucid Sans' }}>{spoonName.toUpperCase()}</p>
                            </Link>
                        </div>
                    ) : (
                        <div style={{ background: 'rgba(228, 231,235, 1)', padding: '15px' }}>
                            <p style={{ textAlign: 'left', fontFamily: 'Lucid Sans' }}>{spoonName.toUpperCase()}</p>
                        </div>
                    )
            }
        </StyledSpoonThumb>
    )
}

export default SpoonThumb