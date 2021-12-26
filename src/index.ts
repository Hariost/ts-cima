import table from "./cima_h.json";
import { People } from './people'

// Taux d'intérêt
const i = 0.035;
// Facteur d'actualisation
const v = 1/(1+i)

const peopleFactory = (age: number): People =>{
    const rawData =  table.find(obj => obj.age===age);
    if(!rawData){
       return new People(0, 0, 0);
    }
    const peopleObject = new People(rawData?.age, rawData?.lx, rawData?.dx);
   return peopleObject;
}

 /**The age where there is no more survivors in the mortality table*/
const W = (): number => {
    const rawData =  table.find(obj => obj.lx===0);
    const age = (rawData)? rawData.age:0;
    return age;
}

/**Death probability between an age x and x+1 */
const qx = (age: number): number => {
    const peopleObject = peopleFactory(age);
    if (peopleObject.lx===0 )return 0;
    return peopleObject.dx/peopleObject.lx;
}

/**Present value of death number at age x*/
const Cx = (age: number): number => {
    const peopleObject = peopleFactory(age);
    return peopleObject.dx*v**(peopleObject.age+0.5);
}

/**Present value of survivors number at age x*/
const Dx = (age: number): number => {
    const peopleObject = peopleFactory(age);
    return peopleObject.lx*v**peopleObject.age;
}

const Mx = (age: number): number => {
    const peopleObject = peopleFactory(age);
    const noSurvivorAge = W();
    let mx: number = 0;
    for (let x = age; x < noSurvivorAge; x++) {
        mx += Cx(x);
    }
    return mx;
}

const Rx = (age: number): number => {
    const peopleObject = peopleFactory(age);
    const noSurvivorAge = W();
    let rx: number = 0;
    for (let x = age; x < noSurvivorAge; x++) {
        rx += Mx(x);
    }
    return rx;
}

const Nx = (age: number): number => {
    const peopleObject = peopleFactory(age);
    const noSurvivorAge = W();
    let nx: number = 0;
    for (let x = age; x < noSurvivorAge; x++) {
        nx += Dx(x);
    }
    return nx;
}

const Sx = (age: number): number => {
    const peopleObject = peopleFactory(age);
    const noSurvivorAge = W();
    let sx: number = 0;
    for (let x = age; x < noSurvivorAge; x++) {
        sx += Nx(x);
    }
    return sx;
}

export { peopleFactory, W, qx, Cx, Dx, Mx, Nx, Sx}