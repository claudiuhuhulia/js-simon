const RandomArrayElement = document.getElementById('randomarray');

let RandomNumArray=[];

function GetRandomNum(){
    let RandomArray=[];
    while(RandomArray.length < 5){
        let RandomNum;
    do{
        RandomNum = Math.floor(Math.random() * 100 ) + 1;
    }
    while(RandomArray.includes(RandomNum));

    RandomArray.push(RandomNum);
    }
    return RandomArray;
}

RandomNumArray = GetRandomNum();
console.log(RandomNumArray);

let string = '';
for(i = 0 ; i < 5 ; i++){
    string += `<div class='px-3'> ${RandomNumArray[i]}</div>`
}

 RandomArrayElement.innerHTML= string; 



