// Assign values to array
let states = ["North Hampshire", "Los Angeles", "New York", "Texas", "North Dakota", "South Dakota"];

// Returns URL-friendly version of a string
function urlify(string) {
    return string.toLowerCase().split(/\s+/).join("-");
}

// Create url-versions of the values
// IMPERATIVE VERSION

function imperativeUrls(elements) {
    let urls = [];
    elements.forEach(function(element) {
        urls.push(urlify(element));
    });
    return urls;
}
console.log(imperativeUrls(states));

// FUNCTIONAL VERSION

function functionalUrls(states) {
    return states.map(element => urlify(element));
}
console.log(functionalUrls(states));

// RETURNS AN ARRAY OF URL'S OF THE FORM https://example.com/<urlified form
function urlForm(states) {
    return states.map(state => "https://example.com/" + state);
}

console.log(urlForm(functionalUrls(states)))

// Define array to store single-word strings
// IMPERATIVE STYLE

function imperativeSingles(states) {
    let singles = [];
    states.forEach(function(state) {
        if (state.split(/\s+/).length === 1) {
        singles.push(state);
        }
    });
    return singles;
}
console.log(imperativeSingles(states));

// FUNCTIONAL STYLE
function functionalSingles(states) {
    return states.filter(state => (state.split(/\s+/).length === 1));
}

console.log(functionalSingles(states));

// Function that returns two Dakotas
function dakotas(states) {
    return states.filter(state => (state.includes("Dakota")));
}
console.log(dakotas(states));

// Function that returns states with two-part names
function twoparts(states) {
    return states.filter(state => state.split(/\s+/).length === 2)
};

console.log(twoparts(states));

// Length of the words in states-array
//IMPERATIVE SOLUTION

function imperativeSum(states) {
    lengths = {}
    states.forEach(function(state) {
        lengths[state] = state.length;
    });
    return lengths;
}
console.log(imperativeSum(states));

//FUNCTIONAL SOLUTION

function functionalSum(states) {
    return states.reduce((lengths, state) => {
                        lengths[state] = state.length;
                        return lengths;
                    }, {});
}
console.log(functionalSum(states));

// function that returns a products of the values in the array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

function product(numbers) {
    return numbers.reduce((total, n) => { return total *=n; });
}
console.log(product(numbers));