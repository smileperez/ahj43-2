export default class Game {
  constructor() {
    this.hits = 0;
    this.misses = 0;
    this.goblin = document.querySelector('.goblin');
    this.fields = document.querySelectorAll('.box');
  }

  getRandomGoblin() {
    // Получаем уникальное рандомное поле (без повторений)
    this.newField = this.getUniqRandom();

    // Проходим по всем полям и ищем поле соответсвтующее newField
    for (const element of this.fields) {
      if (element.getAttribute('data-id') === this.newField.toString()) {
        element.appendChild(this.goblin);
        this.goblin.classList.remove('hide');
        // console.log(`Гоблин появился на поле ${this.newField}`);
      }
    }
  }

  calculateRandom() {
    this.random = Math.floor(Math.random() * 16);
    return this.random;
  }

  getUniqRandom() {
    let randomField = this.calculateRandom();
    while (randomField === this.newField) {
      randomField = this.calculateRandom();
    }
    return randomField;
  }

  start() {
    this.timerInterval = setInterval(() => this.getRandomGoblin(), 1000);
  }
}
