class GameStateTitle implements GameState {

    private ttl = 120;

    update(): GameState {
        let nextGameState: GameState = this;

        if (this.ttl <= 0) {
            nextGameState = new GameStateGameplay();
        }

        this.ttl -= 1;

        return nextGameState;
    }

    draw(): void {
        print("Game Title", 10, 10, 6);
    }
}