class User {
  private _courseCount = 1;

  readonly city: string = "madhubani";
  constructor(public email: string, public name: string) {}

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  // setter method cannot have type
  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error(`Course count should be more than 1`);
    }
    this._courseCount = courseNum;
  }
}
