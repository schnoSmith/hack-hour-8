// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

function numToWords(num) {
    var numbers = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'];
    var hundreds = 'Hundred';
    var thousand = 'Thousand';
    var million = 'Million';
    var trillion = 'Trillion';
    var quadrillion = 'Quadrillion';
    var tentys = 'Twen';
    var thir = 'Thir';
    var fifs = 'Fif'
    var lessThen20 = 'teen'
    var lessThen100 = 'ty';




    var current_place = (num + "").length;
    var current_index = 0;

    function calculateNumber(num) {
        var current_place = (num + "").length;
        var current_index = 0;



    }

}

module.exports = numToWords;