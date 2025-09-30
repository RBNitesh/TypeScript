abstract class TakePhoto {
  constructor(public mode: string, public filter: string) {
    this.mode = mode;
    this.filter = filter;
  }

  abstract getSepia(): void;

  getReelTime(): number {
    return 44;
  }
}

// abstract class cannot be instantiated
// const rinku = new TakePhoto("night", "beauty");

class Instagram extends TakePhoto {
  getSepia(): void {
    console.log("Sepia");
  }

  getReelTime(): number {
    return 45;
  }
}

const user1 = new Instagram("night", "beauty");

console.log(user1.getReelTime());

// Sepia
// undefined -> because this abstract method doesnot return anything after printing the "Sepia"
// console.log(user1.getSepia());

// this will only print 'Sepia'
user1.getSepia();
