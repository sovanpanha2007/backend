import { Duration } from "./Duration.js";
export class RaceResult {
    /**
     * 
     * @param {string} participantId 
     * @param {string} sportType 
     * @param {Duration} duration 
     */
    constructor(participantId, sportType, duration) {
        this.participantId = participantId;
        this.sportType = sportType;
        this.duration = duration;
    }
}