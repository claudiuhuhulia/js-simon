const RandomArrayElement = document.getElementById('randomarray');
const CountdownElement = document.getElementById('countdown');

let RandomNumArray=[];
let UserNumbArray=[];
let includes = 0;
let userarray=[]; 
let CountDown = 10;

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

function Promts(){
    for(i = 0 ; i < 5 ; i++){
        let userNumb = parseInt(prompt(`Digita il ${i + 1}° numero che hai visto`));
        userarray.push(userNumb);
    }
    return userarray;
}
UserNumbArray= userarray;



RandomNumArray = GetRandomNum();
console.log(RandomNumArray);

let string = '';
for(i = 0 ; i < 5 ; i++){
    string += `<div class='px-3'> ${RandomNumArray[i]}</div>`
}

 RandomArrayElement.innerHTML= string; 

setTimeout(vanish, 10000); 
setTimeout(() => {
        UserNumbArray = Promts();
        console.log(UserNumbArray);
        
    for (i = 0; i < 5; i++) {
    if (RandomNumArray.includes(UserNumbArray[i])) {
      includes++;
    }
    }
        console.log(includes);
      alert(`HAI INDOVINATO ${includes} NUMERI SU 5`);
}, 11000);

const count = setInterval(() => {
        CountdownElement.innerText= --CountDown;
        if(CountDown === 0){
            CountdownElement.innerText= '';
            clearInterval(count);
        }
}, 1000);

