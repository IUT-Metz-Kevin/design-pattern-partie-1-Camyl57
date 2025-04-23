class GameSettings {
    private static instance: GameSettings;
    private settings: Map<string, string> = new Map();
  
    private constructor() {}
  
    static getInstance(): GameSettings {
      if (!GameSettings.instance) {
        GameSettings.instance = new GameSettings();
      }
      return GameSettings.instance;
    }
  
    setParam(key: string, value: string): void {
      this.settings.set(key, value);
    }
  
    getParam(key: string): string | undefined {
      return this.settings.get(key);
    }
  }
  
  const config1 = GameSettings.getInstance();
  config1.setParam("volume", "80");
  
  const config2 = GameSettings.getInstance();
  console.log(config1 === config2); 
  console.log(config2.getParam("volume") === "80"); 