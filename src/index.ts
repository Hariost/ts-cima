import table from './cima_h.json';
import { People } from './people';

// Taux d'intérêt
const i: number = 0.035;
// Facteur d'actualisation
const v: number = 1 / (1 + i);

const personRepository = (age: number): People => {
  const person = table.find((obj) => obj.age === age);
  if (!person) {
    return new People(0, 0, 0);
  }
  const peopleObject = new People(person?.age, person?.lx, person?.dx);
  return peopleObject;
};
const lx = (x: number) => {
  const person = personRepository(x);
  return person.lx;
};

const dx = (x: number) => {
  const person = personRepository(x);
  return person.dx;
};
/**The age where there is no more survivors in the mortality table*/
const W = (): number => {
  const rawData = table.find((obj) => obj.lx === 0);
  const age = rawData ? rawData.age : 0;
  return age;
};

/**Death probability between an age x and x+1 */
const qx = (age: number): number => {
  const peopleObject = personRepository(age);
  if (peopleObject.lx === 0) return 0;
  return peopleObject.dx / peopleObject.lx;
};

/**Present value of death number at age x*/
const Cx = (age: number): number => {
  const peopleObject = personRepository(age);
  return peopleObject.dx * v ** (peopleObject.age + 0.5);
};

/**Present value of survivors number at age x*/
const Dx = (age: number): number => {
  const peopleObject = personRepository(age);
  return peopleObject.lx * v ** peopleObject.age;
};

const Mx = (age: number): number => {
  const peopleObject = personRepository(age);
  const noSurvivorAge = W();
  let mx: number = 0;
  for (let x = age; x < noSurvivorAge; x++) {
    mx += Cx(x);
  }
  return mx;
};

const Rx = (age: number): number => {
  const peopleObject = personRepository(age);
  const noSurvivorAge = W();
  let rx: number = 0;
  for (let x = age; x < noSurvivorAge; x++) {
    rx += Mx(x);
  }
  return rx;
};

const Nx = (age: number): number => {
  const peopleObject = personRepository(age);
  const noSurvivorAge = W();
  let nx: number = 0;
  for (let x = age; x < noSurvivorAge; x++) {
    nx += Dx(x);
  }
  return nx;
};

const Sx = (age: number): number => {
  const peopleObject = personRepository(age);
  const noSurvivorAge = W();
  let sx: number = 0;
  for (let x = age; x < noSurvivorAge; x++) {
    sx += Nx(x);
  }
  return sx;
};

export { lx, dx, W, qx, Cx, Dx, Mx, Nx, Sx };
