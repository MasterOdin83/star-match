import React from 'react';
import utils from '../utils'

const StarsDisplay = props => (
    <div>
        {utils.range(1, props.count).map(starId => (
            <div key={starId} className="star"></div>
        ))}
    </div>
);

export default StarsDisplay;