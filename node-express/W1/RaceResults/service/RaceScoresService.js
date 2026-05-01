import { RaceResult } from "../model/RaceResult.js";
import { Duration } from "../../duration.js";
import fs from 'fs'

export class RaceResults {

    constructor() {
        /**
         * @type {RaceResult[]}
         */
        this.results = [];
    }
    /**
     * @param {RaceResult} raceResult
     */
    addRaceResult(raceResult) {
        this.results.push(raceResult)
    }
    /**
     * Save the race results list to a JSON file.
     * @param {string} filePath - The path to the file data should be saved.
     */
    saveToFile(filePath) {
        const data = this.results.map(r => ({
            "participantId": r.participantId,
            "sportType": r.sportType,
            "duration": r.duration
        }))
        fs.writeFileSync(filePath,JSON.stringify(data, null, 2), 'utf8') // JSON.stringify(converted file, filter, identation)
    };
    /**
     * loads the race result list from the json file.
     * @param {string} filePath - The path to the file to load data from.
     * @return {boolean} True if loading was successful, false otherwise
     */
    loadFromFile(filePath) {
        try {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        this.results = data.map(r => new RaceResult(
            r.participantId,
            r.sportType,
            r.duration
        ))
        } catch(error) {
            console.error();
        }
    }
    /**
    * Retrieves the race time for a given participant and sport.
    * @param {string} participantId - Participant ID.
    * @param {string} sport - Sport name.
    * @returns {Duration|null} Duration if found, else null.
    */
    getTimeForParticipant(participantId, sport) {
        const participant = this.results.find(e => (e.sportType == sport && e.participantId == participantId))
        if (participant) {
            return participant.duration
        } else {
            return null
        }
    }
    /**
    * Computes total time for a given participant by summing their race times.
    * @param {string} participant_id - The ID of the participant.
    * @returns {Duration} The total Duration object
    */
    getTotalTimeForParticipant(participant_id) {
        let totalTime =0;
        const participant = this.results.filter(e => e.participantId == participant_id)
        participant.map(e => {
            totalTime += e.duration._totalSecond
        })
        return totalTime
    }
}