import React, { useState } from 'react';
import Game from './Game';
import ScoreBoard from './ScoreBoard';

const StarMatch = () => {
    const [gameId, setGameId] = useState(1);
    const [gameDificulty, setgameDificulty] = useState(5);
    const [gameScore, setgameScore] = useState(0);
    return (
        <div>
            <Game
                key={gameId}
                dificulty={gameDificulty}
                setNewScore={(newScore) => {
                    if (newScore > gameScore)
                        setgameScore(newScore);
                }}
                startNewGame={(newGameDificulty) => {
                    if (gameDificulty !== newGameDificulty) {
                        setgameDificulty(newGameDificulty);
                        setgameScore(0);
                    }
                    setGameId(gameId + 1);
                }} />
            <ScoreBoard maxScore={gameScore} />
        </div>
    );
}
export default StarMatch;