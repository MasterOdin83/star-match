import React from 'react';

const ScoreBoard = props => {
    return (
        <div className='scoreBoard'>
            <div className="timer">Best Time: {props.maxScore}</div>
        </div>
    );
}

export default ScoreBoard;