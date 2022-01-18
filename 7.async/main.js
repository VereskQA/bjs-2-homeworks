// тут вы можете вызывать функции из task.js
function testCase() {
    let clock = new AlarmClock();
    clock.addClock("16:50", () => { console.log('Пора вставать!') }, 1);
    clock.addClock("16:51", () => { console.log('Ну же вставай!'); clock.removeClock(2) }, 2);
    clock.addClock("16:52", () => {
        console.log('Ты будешь вставать или нет???!');
        clock.clearAlarms();
        clock.printAlarms()
    }, 3);
    clock.printAlarms();
    clock.start();
}

testCase()