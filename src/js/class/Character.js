export default class Character {
    constructor(name, type) {
        const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

        if (name.lenght < 2 || name.lenght > 10) {
            throw new Error('Имя должно содержать от 2 до 10 символов');
        } else {
            this.name = name;
        }

        
        if (!types.includes(type)) {
            throw new Error('Такого типа не существует!');
        } else {
            this.type = type;
        }

        this.health = 100;         //уровень жизни
        this.level = 1;            //уровень персонажа

        this.attack = undefined;
        this.defence = undefined;
    }
}