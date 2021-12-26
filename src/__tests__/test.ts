import { peopleFactory, qx } from '../index';
// import { People } from '../people'

test('people age', () => {
    expect(peopleFactory(15).age).toEqual(15);
});

test('test lx', () => {
    expect(peopleFactory(15).lx).toEqual(988884);
});

test('test dx', () => {
    expect(peopleFactory(15).dx).toEqual(708);
});

test('test qx', () => {
    expect(qx(15)).toBeCloseTo(0.00071595859575, 14);
});