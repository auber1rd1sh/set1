import Team from '../src/Team';

test('add character', () => {
    const team = new Team();
    const character = { name: 'Warrior' };
    team.add(character);
    expect(team.toArray()).toEqual([character]);
});

test('add duplicate character', () => {
    const team = new Team();
    const character = { name: 'Warrior' };
    team.add(character);
    expect(() => team.add(character)).toThrow('Character already in the team');
});

test('add multiple characters', () => {
    const team = new Team();
    const char1 = { name: 'Warrior' };
    const char2 = { name: 'Mage' };
    team.addAll(char1, char2, char1);
    expect(team.toArray()).toEqual([char1, char2]);
});

test('convert to array', () => {
    const team = new Team();
    const char1 = { name: 'Warrior' };
    const char2 = { name: 'Mage' };
    team.addAll(char1, char2);
    expect(team.toArray()).toEqual([char1, char2]);
});
