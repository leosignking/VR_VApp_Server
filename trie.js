'use strict';

class Trie {

    constructor() {
        this.value = '';
        this.children = [];
    }

    /**
     * Add an item to the Trie Object
     * 
     * @param {String} item 
     * @param {Number} index 
     */
    insert(item, index = 0) {

        if(item === undefined || item === null) {
            return 
        }

        if(index === item.length) {
            this.value = item;
            return;
        }

        var key = item[index];
        if(this.children[key] === undefined) {
            this.children[key] = new Trie();
        }
        var child = this.children[key];
        child.insert(item, index + 1);
    }

    /**
     * Return all child words starting with prefix
     * 
     * @param {String} prefix 
     */
    allChildWords(prefix) {
        if(!prefix) prefix = '';

        var words = [];
        if(this.value.length != 0) {
            var tmp = new Object();
            tmp.key = prefix;
            tmp.value = this.value
            words.push(tmp);
        }

        for(const key in this.children) {
            var child = this.children[key];
            words = words.concat(child.allChildWords(prefix + key));
        }

        return words;
    }

    /**
     * Find the list of item based on prefix value.
     * 
     * @param {String} prefix 
     * @param {Number} index 
     */
     find(prefix, index = 0) {
        if(prefix.length === 0) return [];

        var key = prefix[index];
        var child = this.children[key];
        if(!child) return [];
        else {
            if(index === prefix.length - 1) {
                return child.allChildWords(prefix);
            } else {
                return child.find(prefix, index + 1);
            }
        }
    }

}


let t = new Trie();

t.insert('abc');
t.insert('abcd');

console.log(t.find('a'));
