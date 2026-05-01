
import { RaceResult } from "./model/RaceResult.js";
import { RaceResults } from "./service/RaceScoresService.js";
import { Duration } from "../duration.js";

const raceManger = new RaceResults()

raceManger.addRaceResult(new RaceResult("participant1", "swim", Duration.fromMinutesAndSeconds(2,30)));
raceManger.saveToFile("./data/raceScores.json")
// console.log(Duration.fromMinutesAndSeconds(2,10));


