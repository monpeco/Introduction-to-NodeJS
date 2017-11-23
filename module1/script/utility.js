module.exports = function(numberToSum){
    var sum = 0,
        i = 0,
        lenght = numberToSum.length;
        
        //console.log(numberToSum.l);

    while (i < lenght){
        sum += numberToSum[i];
        //console.log(sum);

        i++;
    }
        
    return sum;
}