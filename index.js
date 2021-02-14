//comment

module.exports = Phrase;

// Adds 'reverse' to all strings 

String.prototype.reverse = function() {
    return Array.from(this).reverse().join(""); //array from returns a emojis as well
}

String.prototype.blank = function () {
    return !!(this.match(/^\s*$/g));
    }

Array.prototype.last = function() {
    return this.slice(-1);
}

// Defines Phrase Object 

function Phrase(content) {
    this.content = content;

    this.processor = function(string) {
        return string.toLowerCase();
}

    // Returns processed content
    this.processedContent = function processedContent(){
        return this.processor(this.content);
    }

    // Returns a true palindrome or false otherwise.

    this.palindrome = function palindrome() {
        return this.processedContent() === this.processedContent();
    }
}

// Defines Translated Phrase
function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;

    // Returns translation processed for palindrome testing
    this.processedContent = function processedContent() {
        return this.processor(this.translation);
    }
}
 
TranslatedPhrase.prototype = new Phrase();

