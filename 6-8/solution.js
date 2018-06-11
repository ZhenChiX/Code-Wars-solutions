let validatePIN = p => /^([\d]{4}|[\d]{6})$/.test(p);



//////////////////////////////////////


function capitalize(s){

   var result1 = s.split('');
   var result2 = s.split('');
   
   for (var i in result1) {
     if (i % 2 === 0) {
     var letter = result1[i];
     var result1UpperCase = letter.toUpperCase();
     result1.splice(i, 1, result1UpperCase);
     
     } else {
     var letter = result2[i];
     var result2UpperCase = letter.toUpperCase();
     result2.splice(i, 1, result2UpperCase);
     }
   }
   var newArray = [];
   newArray.push(result1.join(''));
   newArray.push(result2.join(''));
     return newArray;
}



