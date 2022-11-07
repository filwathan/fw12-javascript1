
//#region JS1 nomer 1
// 1.a
let word = "malam"
let panjangKata = word.length
let result = "";

for(let index = panjangKata; index > 0; index--){
result = result + word[index-1];
}
if (result == word){
    result = "palindrome"
}
else {
    result = "non palindrome"
}
console.log(result);
// 1.b
word = "malam"
panjangKata = word.length
result = "";
for(let a = 0; a < panjangKata; a++){
    if (word[a] == "a"){
    result = result + "o";
    }
    else{
        result = result + word[a];
    }        
}  
console.log(result);

//#endregion

//#region JS1 nomer 2

let biodata = {
    name: "wizra",
    age: 27,
    hobbies: ["games", "swimming"],
    isMarried: false,
    schoolList: [
        {
            name: "elementary school",
            yearIn: 2000,
            yearOut: 2006,
            major: null
        },
        {
            name: "junior high school",
            yearIn: 2006,
            yearOut: 2009,
            major: null
        },
        {
            name: "senior high school",
            yearIn: 2009,
            yearOut: 2012,
            major: "social"
        },
        {
            name: "national university",
            yearIn: 2012,
            yearOut: 2018,
            major: "information systems"
        }        
    ],
    skills: [
        {
            skillName: "a",
            level: "1"   
        },
        {
            skillName: "b",
            level: "2"   
        },
        {
            skillName: "c",
            level: "3"   
        },
    ],
    insteristingCoding: true
}

//#endregion

//#region JS1 nomer 3

let mtk = 30;
let bahasaIndonesia = 80;
let bahasaInggris = 40;
let ipa = 80;

if (mtk != null && bahasaIndonesia != null && bahasaInggris != null && ipa != null) {
    let average = (mtk + bahasaIndonesia + bahasaInggris + ipa)/4
    let grade = "";

    if (average >=90 && average <= 100){
        grade = "A";
        console.log("Rata-rata = " + average);
        console.log("Grade = "+ grade);
    }
    else if (average >=80 && average <= 89){
        grade = "B";
        console.log("Rata-rata = " + average);
        console.log("Grade = "+ grade);
    }
    else if (average >=70 && average <= 79){
        grade = "C";
        console.log("Rata-rata = " + average);
        console.log("Grade = "+ grade);
    }
    else if (average >=60 && average <= 69){
        grade = "D";
        console.log("Rata-rata = " + average);
        console.log("Grade = "+ grade);
    }
    else if (average >=0 && average <= 59){
        grade = "E";
        console.log("Rata-rata = " + average);
        console.log("Grade = "+ grade);
    }    
}
else{
    console.log("Semua Nilai Harus Terisi !");
}
//#endregion


//#region JS1 nomer 4 & 5

var palindrome = function(word){
    let panjangKata = word.length
    let result = "";
    result = validationTwoWords(word);

    if (result == true){
        result = "";
        for(let a = panjangKata; a > 0; a--){
        result = result + word[a-1];
        }
            
            if (result == word){
                result = "palindrome"
            }
            else {
                result = "non palindrome"
            }
        console.log(result);
        return result;
    }

    else{
        result = "parameter or word must have 2 word or more"
        console.log(result)
        return result;
    }  
}

var konsonan = function(word){
    let panjangKata = word.length
    let result = "";
    result = validationTwoWords(word);

    if (result == "true"){
        result = "";
        for(let a = 0; a < panjangKata; a++){
            if (word[a] == "a"){
            result = result + "o";
            }
            else{
                result = result + word[a];
            }        
        }  
        console.log(result);
        return result;
    }
    else{
        result = "parameter or word must have 2 word or more";
        console.log(result)
        return result;
    }     
}

var validationTwoWords = function(word){
    let validation = Boolean;
    if (word.length >= 2){
        validation = true
    }
    else {
        validation = false
    }

    return validation
}

//#endregion

