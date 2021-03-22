import { Spaceship } from './Spaceship.js';

class Game {
    #htmlElements = {
        spaceship: document.querySelector('[data-spaceship]')
    }
    #ship = new Spaceship(this.#htmlElements.spaceship)    
    
    init() {
        this.#ship.init()
        console.log('working')
    }   
}

window.onload = function() {
    const game = new Game();
    game.init();
    console.log(game)
}