import { RaceResults } from "./service/RaceScoresService.js";

const raceManger = new RaceResults();
raceManger.loadFromFile("./data/raceScores.json")
// console.log(raceManger.results);
// console.log(raceManger.getTimeForParticipant("participant100", "ball"))
console.log(raceManger.getTotalTimeForParticipant("participant100"))