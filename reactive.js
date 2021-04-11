const thrush = x => f =>f(x);

class Observable {
    constructor() {
        this.callbacks = [];
    }
    subscribe(cb) {
        this.callbacks.push(cb);
    }
    emit(x) {
        this.callbacks.map(thrush(x));
    }
}

const observable = new Observable();

const pipe = (...fs) => x => fs.reduce((acc, f) => f(acc), x);

const tap = f => x => { f(x); return x; };

const double = x => x*2;

console.log(pipe(
    double,
    tap(console.log),
    double,
    double
)(10));

observable.emit(10);
observable.emit(3);
observable.emit(5);