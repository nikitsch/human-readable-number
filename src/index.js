module.exports = function toReadable (number) {
      let resultOne = '';
    let resultTwo = '';
    let resultThree = '';
    let numString = String(number);
    let unit = numString[numString.length - 1];
    let dozen = numString[numString.length - 2];
    let hundred = numString[numString.length - 3];
    let figures = {
        0 : '',
        1 : 'one',
        2 : 'two',
        3 : 'three',
        4 : 'four',
        5 : 'five',
        6 : 'six',
        7 : 'seven',
        8 : 'eight',
        9 : 'nine',
    }
    let tens = {
        0 : 'ten',
        1 : 'eleven',
        2 : 'twelve',
        3 : 'thirteen',
        4 : 'fourteen',
        5 : 'fifteen',
        6 : 'sixteen',
        7 : 'seventeen',
        8 : 'eighteen',
        9 : 'nineteen',
    }
    let dozens = {
        2 : 'twenty',
        3 : 'thirty',
        4 : 'forty',
        5 : 'fifty',
        6 : 'sixty',
        7 : 'seventy',
        8 : 'eighty',
        9 : 'ninety',
    }
    if (hundred) {
        resultOne = `${figures[+hundred]} hundred`;
    } else {
        resultOne = ``;
    };
    if (dozen) {
        if (dozen > 1) {
            resultTwo = ` ${dozens[+dozen]}`;
        }
    } else {
        resultTwo = ``;
    };
    if (unit) {
        resultThree = ` ${figures[+unit]}`;
    };
    let result = resultOne + resultTwo + resultThree;
    if (dozen == 1) {
        result = resultOne + ` ${tens[+unit]}`;
    };
    if (number == 0) {
        result = `zero`;
    };
    return result.trim(); 
}
