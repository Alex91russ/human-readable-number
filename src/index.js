module.exports = function toReadable(number, callback = "") {
    let result = callback;

    const numberToString = number.toString();
    const transformToString = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    if (number >= 0 && number < 20) {
        return `${result}${transformToString[number]}`;
    }

    if (number >= 20 && number < 100) {
        if (number % 10 === 0) {
            return `${result}${transformToString[numberToString[0] * 10]}`;
        }
        return `${result}${transformToString[numberToString[0] * 10]} ${
            transformToString[numberToString[1]]
        }`;
    }

    if (number > 99 && number < 1000) {
        if (number % 100 === 0) {
            return `${transformToString[numberToString[0]]} hundred`;
        }
        let result = `${transformToString[numberToString[0]]} hundred `;
        return toReadable(number - numberToString[0] * 100, result);
    }
};
