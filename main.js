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