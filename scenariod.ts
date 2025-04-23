interface Boisson {
    getDescription(): string;
    getPrix(): number;
  }
  
  class Cafe implements Boisson {
    getDescription() { return "Café"; }
    getPrix() { return 4; }
  }
  
  abstract class Option implements Boisson {
    constructor(protected boisson: Boisson) {}
    abstract getDescription(): string;
    abstract getPrix(): number;
  }
  
  class LaitDeCoco extends Option {
    getDescription() { return this.boisson.getDescription() + ", Lait de coco"; }
    getPrix() { return this.boisson.getPrix() + 2; }
  }
  
  class Chantilly extends Option {
    getDescription() { return this.boisson.getDescription() + ", Chantilly"; }
    getPrix() { return this.boisson.getPrix() + 1; }
  }
  
  let b: Boisson = new Cafe();
  b = new LaitDeCoco(b);
  b = new Chantilly(b);
  console.log(b.getDescription()); 
  console.log(b.getPrix());