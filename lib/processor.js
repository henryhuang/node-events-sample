/**
 * Created by Henry Huang on 10/2/17.
 */
const events = require('events');

class Processor {

    constructor(postPath) {
        this.postPath = postPath;
        this.event = new events.EventEmitter();
    }

    toString() {
        return 'Processor: ' + this.postPath;
    }

    on(event, callback) {
        this.event.on(event, callback);
    }

    trigger() {
        const p = this;
        // emit start event
        p.event.emit('start');

        // progress mock
        const progresses = [1, 4, 10, 20, 25, 50, 70, 90, 100];
        let index = 0;
        const intervalId = setInterval(() => {
            if (index <= progresses.length - 1) {
                p.event.emit('inProgress', progresses[index++]);
            } else {
                clearInterval(intervalId);
                // emit finish event
                p.event.emit('finish');
            }
        }, 1000);
    }

}

export default Processor;