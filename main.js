const RandomArrayElement = document.getElementById('randomarray');

let RandomNumArray=[];
let UserNumbArray=[];
let i = 0;

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

function vanish(){
    RandomArrayElement.classList.add('d-none');
}
let userarray=[];
function Promts(){
    let userNumb;
    for(i = 0 ; i < 5 ; i++){
        userNumb = parseInt(prompt(`Digita il ${i + 1} numero che hai visto`));
        userarray += userNumb;
    }
    return userarray;
}
UserNumbArray= userarray;



if(RandomNumArray.includes(UserNumbArray)){
i++;

}
console.log(i);

RandomNumArray = GetRandomNum();
console.log(RandomNumArray);

let string = '';
for(i = 0 ; i < 5 ; i++){
    string += `<div class='px-3'> ${RandomNumArray[i]}</div>`
}

 RandomArrayElement.innerHTML= string; 

    setTimeout(vanish, 10000); 
    setTimeout(Promts, 5000); 

    console.log(UserNumbArray);