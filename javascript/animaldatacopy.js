let animals = [{ 
        name  : "Lion",
        species: "Panthera leo",
        habitat : "Grassland",
        average_lifespan : 12,
        average_speed : 50
      },
      {
        name: "Elephant",
        species: "Loxodonta africana",
        habitat: "Savannah",
        average_lifespan: 60,
        average_speed: 25
      },
      {
        name: "Penguin",
        species: "Spheniscidae",
        habitat: "Antarctica",
        average_lifespan: 15,
        average_speed: 1
      }]

      for (let i = 0; i < 3; i++){
        console.log(animals[i].species) 
      }
    
      // console.log(animals[1].species);

  // keys are listed as strings, should i change them to variables? animals listed as string, should i give as an object?