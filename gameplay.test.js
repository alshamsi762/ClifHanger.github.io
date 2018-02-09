const testgameplay = require('./testgameplay.js');

test('Creating gameplay object and player linked list', () => {
  expect(testgameplay.testGameplayObject()).toBe(true);
})

test('Kill players at different locations in linked list works', () => {
  expect(testgameplay.testKillingPlayer()).toBe(true);
})

// test('Create board and see if players are at the spawn locations', () => {
//   expect(testgameplay.testCreateBoard()).toBe(true);
// })

test('Moving to valid and invalid spaces', () => {    // Still need to do tests for picking up items once we have a list of items
  expect(testgameplay.testMoving()).toBe(true);
})

test('Dropping 10 random items', () => {
  expect(testgameplay.testDropItem()).toBe(10);
})

test('Calculate possibleAttacksBy using traps, regular and ranged basic and radius attacks from position 45.', () => {
  expect(testgameplay.testPossibleAttacksBy()).toBe(true);
})
