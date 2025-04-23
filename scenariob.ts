interface UniteOrganisationnelle {
    afficher(indent?: string): void;
  }
  
  class Employe implements UniteOrganisationnelle {
    constructor(private nom: string) {}
    afficher(indent = ""): void {
      console.log(`${indent}- Employé : ${this.nom}`);
    }
  }
  
  class Departement implements UniteOrganisationnelle {
    private enfants: UniteOrganisationnelle[] = [];
    constructor(private nom: string) {}
  
    ajouter(unite: UniteOrganisationnelle): void {
      this.enfants.push(unite);
    }
  
    afficher(indent = ""): void {
      console.log(`${indent}+ Département : ${this.nom}`);
      this.enfants.forEach(e => e.afficher(indent + "  "));
    }
  }
  
  const dpt = new Departement("Technique");
  dpt.ajouter(new Employe("Yanis"));
  dpt.ajouter(new Employe("Jessym"));
  dpt.afficher();