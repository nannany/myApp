import { ModuleWithComponentFactories } from "@angular/core";
import * as moment from 'moment';

export class Comment {
    name: string;
    message: string;
    date: number;

    constructor(name: string, message: string) {
        this.name = name;
        this.message = message;
        this.date = +moment();
    }

    deserialize() { // 追加
        return Object.assign({}, this);
    }

    setDate(date: number): Comment {
        this.date = date;
        return this;
    }

}

export class Session {
    login: boolean;

    constructor() {
        this.login = false;
    }

    reset(): Session { // 追加
        this.login = false;
        return this;
    }

}
