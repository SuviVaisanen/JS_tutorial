module.exports = Phrase;

// Adds 'reverse' to all strings 

String.prototype.reverse = function() {
    return Array.from(this).reverse().join(""); //array from returns a emojis as well
}

// Defines Phrase Object 

function Phrase(content) {
    this.content = content;

    // Returns processed content
    this.processedContent = function processedContent() {
        return this.content.toLowerCase();
    }

    // Returns the letters in the content
    this.letters = function letters() {
        return this.content; // stub return value
    }

    // Returns a true palindrome or false otherwise.

    this.palindrome = function palindrome() {
        return this.processedContent() === this.processedContent().reverse();
    }
}

