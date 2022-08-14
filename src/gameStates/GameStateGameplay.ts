class GameStateGameplay implements GameState {

    private x: number = 0;
    private y: number = 0;
    private color: Color = 8;

    update(): GameState {
        if (btn(0) && this.x > 0) this.x--;
        if (btn(1) && this.x < 127) this.x++;
        if (btn(2) && this.y > 0) this.y--;
        if (btn(3) && this.y < 127) this.y++;
        if (btn(4)) this.color = (this.color - 1) % 16;
        if (btn(5)) this.color = (this.color + 1) % 16;

        return this;
    }

    draw(): void {
        circfill(
            this.x,
            this.y,
            10,
            this.color,
        );
    }
}