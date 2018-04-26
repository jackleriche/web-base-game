/// <reference path="../node_modules/phaser/typescript/phaser.comments.d.ts" />
import { Ting } from "./Ting";
import "phaser";

class Boom { 

    constructor() {
        console.log("hello there");
        console.log("now i wonder if it will compile this in real time");
    }
}

const test: Boom = new Boom();
const externalTest: Ting = new Ting();

const fuck: Phaser.Game = new Phaser.Game();