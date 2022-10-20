const oneToNine = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine '];
const tenToNineteen = ['Ten ', 'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen '];
const twentyToNinety = ['Twenty ', 'Thirty ', 'Fourty ', 'Fifty ', 'Sixty ', 'Seventy ', 'Eighty ', 'Ninty '];

const handleHundred = (num) => {
    if (num < 10) return oneToNine[num];
    if (num < 20) return tenToNineteen[num % 10];
    if (num < 100) return twentyToNinety[Math.floor(num / 10) - 2] + oneToNine[num % 10];
    return oneToNine[Math.floor(num / 100)] + 'Hundred ' + handleHundred(num % 100);
}

console.log(handleHundred(540))

const numberToWords = (num) => {
    if (num < 1000) {
        return handleHundred(num);
    }
    if (num < 1000000) {
        return handleHundred(Math.floor(num / 1000)) + 'Thousant ' + handleHundred(num % 1000);
    }
    if (num < 1000000000) {
        return handleHundred(Math.floor(num / 1000000)) + 'Million ' + numberToWords(num % 1000000);
    }
    if (num < 1000000000000) {
        return handleHundred(Math.floor(num / 1000000000)) + 'Billion ' + numberToWords(num % 1000000000);
    }
    if (num < 1000000000000000) {
        return handleHundred(Math.floor(num / 1000000000000)) + 'Trillion ' + numberToWords(num % 1000000000000);
    }
}

console.log(numberToWords(100000000000000));