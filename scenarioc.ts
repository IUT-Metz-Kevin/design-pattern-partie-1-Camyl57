interface ControllerActions {
    sauter(): void;
    attaquer(): void;
    interargir(): void;
  }
  
  class XboxAdapter implements ControllerActions {
    sauter() { console.log("Xbox : A"); }
    attaquer() { console.log("Xbox : B"); }
    interargir() { console.log("Xbox : X"); }
  }
  

  const controlleur: ControllerActions = new XboxAdapter();
  controlleur.sauter();      
  controlleur.attaquer();    
  controlleur.interargir(); 