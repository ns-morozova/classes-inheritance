import Character from "../class/Character";

test('Правильно создается объект', () => {
  const character = new Character('Don', 'Bowman');
  const correct = {
    attack: undefined,
    defence: undefined,
    health: 100,
    level: 1,
    name: 'Don',
    type: 'Bowman'
  };

  expect(character).toEqual(correct);
});
