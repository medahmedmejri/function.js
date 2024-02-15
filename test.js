
function calcul (str){
    var countLength=0;
    var countWords=0;
    var countVowel=0;
const arr = str.split(' ')
    for ( var i=0; i<str.length;i++){
        countLength++
        if (str[i] == " "){
countWords++
        } 
if (str[i].match(/[aeiou]/) ){
            countVowel++
        }
    }
    countWords +=1
   return {
        length:countLength,
           Words:countWords,
        Vowel:countVowel,
    };
}
