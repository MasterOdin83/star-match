import React from 'react'

const PlayAgain = props => {
    return (
        <div className="game-done">
            <div
                className="message"
                style={{ color: props.gameStatus === 'lost' ? 'red' : 'green' }}
            >
                {props.gameStatus === 'lost' ? 'Game Over' : 'You Win!'}
            </div>
            <div className='newGameBtn'>
                <button key='easy' className='playButton' onClick={() => props.onClick(15)}>Play Again (Easy)</button>
                <button key='medium' className='playButton' onClick={() => props.onClick(10)}>Play Again (Medium)</button>
                <button key='hard' className='playButton' onClick={() => props.onClick(5)}>Play Again (Hard)</button>
            </div>
        </div>
    )
};

export default PlayAgain;