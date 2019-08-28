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
        return db.execute('INSERT INTO words (pos, deWord, faWord, imgsrc) VALUE (?, ?, ?, ?)', 
        [this.pos, this.deword, this.faword, this.imgsrc]);
    }

    static fetchAll() {
       return db.execute('SELECT * FROM words');
    }

    static find(word) {
        return db.execute('SELECT * FROM words WHEN words.deword = ?', [word] ); 
    }
};