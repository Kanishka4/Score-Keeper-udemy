var p1Score=0;
var p2Score=0;
const winningScoreSelect=document.querySelector('#scoreUpTill');
let winningScore=5

document.querySelector('#p1Button').addEventListener('click',function(){
    console.log('p1Clicked');
    if(p1Score!=winningScore && p2Score!=winningScore){
        p1Score=p1Score+1;
        document.getElementById('p1Score').innerText=p1Score;
    }
})

document.querySelector('#p2Button').addEventListener('click',function(){
    console.log('p2Clicked');
    if(p2Score!=winningScore && p1Score!=winningScore){
        p2Score=p2Score+1;
        document.getElementById('p2Score').innerText=p2Score;
    }
})

document.querySelector('#reset').addEventListener('click', reset);

winningScoreSelect.addEventListener('change',function(){
   winningScore=parseInt(this.value);
   reset();
})

function reset(){
    p1Score=0;
    p2Score=0;
    document.getElementById('p1Score').innerText=p1Score;
    document.getElementById('p2Score').innerText=p2Score;

}