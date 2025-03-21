const highScoreInfo = [
    { animeId: 1735, difficulty: 'easy', highScore: 0 },
    { animeId: 1735, difficulty: 'medium', highScore: 0 },
    { animeId: 1735, difficulty: 'hard', highScore: 0 },

    { animeId: 11061, difficulty: 'easy', highScore: 0 },
    { animeId: 11061, difficulty: 'medium', highScore: 0 },
    { animeId: 11061, difficulty: 'hard', highScore: 0 },

    { animeId: 40748, difficulty: 'easy', highScore: 0 },
    { animeId: 40748, difficulty: 'medium', highScore: 0 },
    { animeId: 40748, difficulty: 'hard', highScore: 0 },

    { animeId: 38000, difficulty: 'easy', highScore: 0 },
    { animeId: 38000, difficulty: 'medium', highScore: 0 },
    { animeId: 38000, difficulty: 'hard', highScore: 0 },

    { animeId: 16498, difficulty: 'easy', highScore: 0 },
    { animeId: 16498, difficulty: 'medium', highScore: 0 },
    { animeId: 16498, difficulty: 'hard', highScore: 0 }
]

function getHighScoreData(animeId, difficulty) {
    let value = -1
    highScoreInfo.forEach((element) => {
        if (element.animeId == animeId && element.difficulty == difficulty) {
            value = element.highScore
        }
    })
    return value
}

function setHighScoreData(animeId, difficulty, score) {
    highScoreInfo.forEach((element) => {
        if (element.animeId == animeId && element.difficulty == difficulty) {
            element.highScore = score
            return
        }
    })
}

export { setHighScoreData, getHighScoreData, }