interface GameState {
    update: () => GameState,
    draw: () => void,
}

