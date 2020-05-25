import EventEmitter from 'events';

const eventEmitter = () => {
    const event = new EventEmitter.EventEmitter(); // 创建eventemitter对象
    console.log('1秒后开始执行');
    // 注册一个监听器
    event.on('some_event', (e) => { // 一旦some_event发出事件，监听器触发
        console.log('some_event 事件触发 ' + e);
    });
    setTimeout(() => {
        event.emit('some_event', 'two'); // 向event发送some_event事件,第二个为参数
    }, 3000);
    event.removeListener('some_event', () => {
        console.log('监听器已被移除');
    });
    event.addListener('some_event', () => {
        console.log('第二个');
    });
    const eventLength = event.listenerCount('some_event');
    console.log('监听器数量' + eventLength);
};
export default eventEmitter;