// require = node imports functionality from an external file

let assert = require("assert"); // lets assert things that are true in the test
let Phrase = require("../index.js"); // requires the object itself

describe("Phrase", function() {

    describe ("#palindrome", function() {

        it("should return false for a non-palindrome", function() {
            let nonPalindrome = new Phrase("loop");
            assert(!nonPalindrome.palindrome());
        });

        it("should return a true for a plain palindrome", function() {
            let plainPalindrome = new Phrase("racecar");
            assert(plainPalindrome.palindrome());
        });

        it("should return true for a mixed-case palindrome", function() {
            let mixedPalindrome = new Phrase("RaceCar");
            assert(mixedPalindrome.palindrome());
        });
    });
        describe("#letters", function() {
        it("should return only letters", function() {
            let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
            assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");
    });
    });
});
