import { Spaceship } from './Spaceship.js';
import { Enemy } from './Enemy.js';

class Game {
    #htmlElements = {
        spaceship: document.querySelector('[data-spaceship]'),
        container: document.querySelector('[data-container]')
    }
    #ship = new Spaceship(this.#htmlElements.spaceship, this.#htmlElements.container)    
    #enemies = [];
    #enemiesInterval = null;
    #checkPositionInterval = null;
    #createEnemyInterval = null;

    init() {
        this.#ship.init();
        this.#newGame();
    }   

    #newGame() {
        this.#enemiesInterval = 30;

        this.#createEnemyInterval = setInterval(() => {
            this.#createNewEnemy()
        }, 5000);

        this.#checkPositionInterval = setInterval(() => {
            this.#checkPosition();
        }, 100);
    }

    #createNewEnemy() {
        const enemy = new Enemy(
            this.#htmlElements.container,
            this.#enemiesInterval,
            'enemy',
            )
        enemy.init()
        this.#enemies.push(enemy)
    }

    #checkPosition() {
        this.#ship.missiles.forEach((missile, missileIndex, missileArr) => {
            const missilePosition = {
                top: missile.element.offsetTop,
                right: missile.element.offsetLeft + missile.element.offsetWidth,
                bottom: missile.element.offsetTop + missile.element.offsetHeight,
                left: missile.element.offsetLeft
            }


            if(missilePosition.bottom < 0) {
                missile.remove();
                missileArr.splice(missileIndex, 1);
            }

        })
    }

}

window.onload = function() {
    const game = new Game();
    game.init();
}