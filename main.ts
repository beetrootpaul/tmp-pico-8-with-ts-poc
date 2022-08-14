// title:  game title
// author: game developer
// desc:   short description
// script: js

/// <reference path="src/gameStates/GameState.ts" />
/// <reference path="src/gameStates/GameStateTitle.ts" />
/// <reference path="src/gameStates/GameStateGameplay.ts" />

let currentGameState: GameState;
let nextGameState: GameState;

function _init() {
    currentGameState = new GameStateGameplay();
}

function _update() {
    nextGameState = currentGameState?.update();
}

function _draw() {
    cls();
    currentGameState.draw();
    // if (nextGameState) {
    //     currentGameState = nextGameState;
    // }
}

// do not delete these lines (for the build process)
_init();
_update();
_draw();