const thrush = x => f =>f(x);

class Observable {
    constructor() {
        this.callbacks = [];
    }
    subscribe(cb) {
        this.callbacks.push(cb);
    }
    emit(x) {
        //this.callbacks.map(cb => cb(x));
        // or
        this.callbacks.map(thrush(x));
    }
}

const observable = new Observable();

const double = x => x*2;

observable.subscribe(x=> console.log(x));

const pipe = (f,g) => x => g(f(x))

console.log(pipe(
    double,
    double
)(10));

observable.emit(3);
observable.emit(5);
