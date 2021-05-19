
export default class MessageModel {
    constructor(plainMessage) {
        this.id = plainMessage.id;
        this.userId = plainMessage.userId;
        this.date = plainMessage.date;
        this.content = plainMessage.content;
        this.comments = plainMessage.comments;
    }
}