interface Personnage {
    attaquer(): string;
  }
  
  class Guerrier implements Personnage {
    attaquer() { return "Coup d'épée !"; }
  }
  
  class Magicien implements Personnage {
    attaquer() { return "Sort magique !"; }
  }
  
  class Archer implements Personnage {
    attaquer() { return "Tir à l'arc !"; }
  }
  
  class PersonnageFactory {
    static creer(type: string): Personnage {
      switch (type) {
        case "Guerrier": return new Guerrier();
        case "Magicien": return new Magicien();
        case "Archer": return new Archer();
        default: throw new Error("Type inconnu");
      }
    }
  }
  
  const p1 = PersonnageFactory.creer("Magicien");
  console.log(p1.attaquer());
  
  const p2 = PersonnageFactory.creer("Archer");
  console.log(p2.attaquer());