import React, { useState } from 'react';
import Game from './Game';

const StarMatch = () => {
    const [gameId, setGameId] = useState(1);
    // const [dificulty, setDificulty] = useState(10);
    return <Game
        key={gameId}
        // dificulty={dificulty}
        startNewGame={() => {
            // setDificulty(newDificulty);
            setGameId(gameId + 1);
        }} />;
}

export default StarMatch