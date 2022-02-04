class People {
  private _age: number;
  private _lx: number;
  private _dx: number;

  constructor(age: number, lx: number, dx: number) {
    this._age = age;
    this._lx = lx;
    this._dx = dx;
  }

  public get age() {
    return this._age;
  }

  /**Number of survivors at a defined age */
  public get lx() {
    return this._lx;
  }
  /**Number of death at a defined age */
  public get dx() {
    return this._dx;
  }
}

export { People };
