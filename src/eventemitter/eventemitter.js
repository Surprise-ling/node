import EventEmitter from 'events';

const event = new EventEmitter.EventEmitter();
event.on('some_event', () => { 
    console.log('some_event 事件触发 ');
});