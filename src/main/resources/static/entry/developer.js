class Developer {
    constructor(keyboard, monitor) {
        this.keyboard = keyboard;
        this.monitor = monitor;
    }

    getDeveloper() {
        let message = 'My keyboard is ' + this.keyboard + ' and my monitor is ' + this.monitor;
        return message;
    }
}

export default Developer;