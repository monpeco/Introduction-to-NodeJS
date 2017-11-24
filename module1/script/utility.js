module.exports = function(numberToSum){
    var sum = 0,
        i = 0,
        lenght = numberToSum.length;
    
    while (i < lenght){
        sum += numberToSum[i];
        i++;
    }
        
    return sum;
}