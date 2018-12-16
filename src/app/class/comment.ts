export class Comment {
    name: string;
    message: string;

    constructor(name: string, message: string) {
        this.name = name;
        this.message = message;
    }

    deserialize() { // 追加
        return Object.assign({}, this);
    }
}
