import Person from './';

let basicJson = {
  meta: {
    type: 'Person',
    structure: 'array'
  },
  result: [
    {firstname: 'John', lastname: 'Doe'},
    {firstname: 'Mary', lastname: 'Jane'}
    ]
};

// test('meta tags are present', () => {
//   let testPerson = new Person(basicJson);
//   expect(testPerson.ok).toBe(true);
//   expect(testPerson.meta).toEqual({
//     type: 'Person',
//     structure: 'array'
//   });
  

// });

test('people objects are created', () => {
  let testPerson = new Person(basicJson);
  expect(testPerson.ok).toBe(true);
  expect(Array.isArray(testPerson.people)).toBe(true);
  expect(testPerson.people.length).toBe(2);
  expect(testPerson.people[0]).toEqual({firstname: 'John', lastname: 'Doe'});
  expect(testPerson.people[1]).toEqual({firstname: 'Mary', lastname: 'Jane'});

});
