const db = require('../util/database');

module.exports = class Database {
    constructor(id, pos, deword, faword, imgsrc) {
        this.id = id;
        this.pos = pos;
        this.deword = deword;
        this.faword = faword;
        this.imgsrc = imgsrc;
    }

    save() {

    }

    static fetchAll() {
       return db.execute('SELECT * FROM words');
    }
};