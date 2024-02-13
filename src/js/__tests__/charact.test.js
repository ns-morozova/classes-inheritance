import { Character } from '../app.js';

test('class Character', () => {
  const character = new Character('Charlie', 'Bowman');
  expect(character.name).toBe('Charlie');
  expect(character.type).toBe('Bowman');
});
