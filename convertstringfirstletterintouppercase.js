const mySentence = "our first program";
const words = mySentence.split(" ");

for (let i = 0; i < words.length; i++) {
   words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

words.join(" ");
let str="";
for (let j=0;j<words.length;j++){
    str=str+' '+words[j];

}
console.log(str)

