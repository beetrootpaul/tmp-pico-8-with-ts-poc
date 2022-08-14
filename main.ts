// title:  game title
// author: game developer
// desc:   short description
// script: js

/// <reference path="src/some-file.ts" />

let x = 0;
let y = 0;
let c = 8;

let lol2 = newLol2();

function myUpdate(): void {
    if (btn(0) && x > 0) x--;
    if (btn(1) && x < 127) x++;
    if (btn(2) && y > 0) y--;
    if (btn(3) && y < 127) y++;
    if (btn(4) && c > 1) c--;
    if (btn(5) && c < 15) c++;
}

function _init() {
}

function _update() {
    myUpdate();
}

function _draw() {
    cls();
    lol2.myDraw(x, y, c);
}

// do not delete these lines (for the build process)
_init();
_update();
_draw();