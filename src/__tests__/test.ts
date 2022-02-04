import { lx, dx, W, qx, Cx, Dx, Mx, Nx, Sx } from '../index';

test('test lx', () => {
  expect(lx(15)).toEqual(988884);
});

test('test dx', () => {
  expect(dx(15)).toEqual(708);
});

test('test Cx', () => {
  expect(Cx(15)).toBeCloseTo(415.391720384986, 12);
});

test('test qx', () => {
  expect(qx(15)).toBeCloseTo(0.00071595859575, 12);
});

test('test Dx', () => {
  expect(Dx(15)).toBeCloseTo(590255.582508172, 9);
});

test('test Mx', () => {
  expect(Mx(15)).toBeCloseTo(93633.9758411312, 9);
});
test('test Nx', () => {
  expect(Nx(15)).toBeCloseTo(14733029.9893708, 7);
});

test('test Sx', () => {
  expect(Sx(15)).toBeCloseTo(307071278.809964, 9);
});
