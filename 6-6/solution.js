function insertDash(num){
    var numSplit = num.toString().split('');
    var numString = [];
    // console.log(numSplit);
    for(i = 0; i < numSplit.length; i++){
        if(numSplit[i] % 2 === 1 && numSplit[i+1] % 2 === 1){
            numString += numSplit[i] + '-';            
        }else{
            numString += numSplit[i];
        }
    }
    console.log(numString);
return numString;
}

