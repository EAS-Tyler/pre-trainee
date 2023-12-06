// Example of invalid key names // objects within variables must adhere to rules to be valid
const trainSchedule = {
    platform num: 10, // Invalid because of the space between words.
    40 - 10 + 2: 30, // Expressions cannot be keys.
    +compartment: 'C' // The use of a + sign is invalid unless it is enclosed in quotations.
  }