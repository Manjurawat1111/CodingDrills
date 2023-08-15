const str="naveen";
const shiftByPos=2;
const encodedStr=(str,shiftByPos) =>{
    let encodedString="";
    let currentPos=0; newPos=0;

    for(i=0;i<str.length;i++){
        currentPos=str.charCodeAt(i);
        newPos=currentPos+shiftByPos;
        encodedString+=String.fromCharCode(newPos);
    }
    return encodedString;
}

const result=encodedStr(str,shiftByPos);
console.log(result);