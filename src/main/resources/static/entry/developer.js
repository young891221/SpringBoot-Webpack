class Developer {
    constructor(keyboard, monitor, project='none', arrayProject=[]) {
        this._keyboard = keyboard;
        this._monitor = monitor;
        this._project = project;
        this._arrayProject = arrayProject; //제너레이터 적용하기!
    }

    getDeveloperItem() {
        let message = 'My keyboard is ' + this._keyboard + ' and my monitor is ' + this._monitor;
        return message;
    }

    get project() {
        return this._project;
    }

    set project(value) {
        this._project = value;
    }


}

export default Developer;