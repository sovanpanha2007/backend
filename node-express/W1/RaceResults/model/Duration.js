export class Duration {
    /**
    * Total duration in seconds.
    * @type {number}
    * @private
    */
    _totalSecond;
    constructor(_totalSecond) {
        this._totalSecond = _totalSecond;
    }
    static fromMinutesAndSeconds(minutes = 0,seconds = 0) {
        return new Duration(minutes*60 + seconds)
    }
    toString = () => {
        const minutes = Math.floor(this._totalSecond / 60);
        const seconds = this._totalSecond % 60;
        return `${minutes}m${seconds}s`
    }
    plus = (other) => {
        this._totalSecond += other;
        return this._totalSecond;
    }
    minus = (other) => {
        this._totalSecond -= other;
        if (this._totalSecond < 0) {
            this._totalSecond = 0
            return this._totalSecond;
        } else {
            return this._totalSecond;
        }
    }
}



