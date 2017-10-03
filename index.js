/**
 * Created by Henry Huang on 10/2/17.
 */
import Processor from './lib/processor';

const path = '/deploy_test';
const processor = new Processor(path);

processor.trigger();

console.log(processor.toString());

processor.on('start', () => {
    console.log('Start!');
});

processor.on('inProgress', (progress) => {
    console.log('In progress ' + progress + '%');
});

processor.on('finish', (progress) => {
    console.log('Finish!');
});