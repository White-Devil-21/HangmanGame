var ctr = 0;
var wrongClick = []
var winCtr = 0
var loseCtr = 0
var score = 0
document.addEventListener("keydown", (event)=>{
    var press = (event.key).toUpperCase()
    checker(press)    
})

localStorage.setItem('maxScore', 0)

var word = 'TRICHY'

for(var i=65;i<91;i++){
    let keyb = document.querySelector('#VirtualKey')
    var dum = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var str = dum[i-65]
    keyb.innerHTML += `<button id="${i-64}" class ='key' type="button" );">${str}</button>`
    
}
var button = document.querySelectorAll('button')
for(var i=0;i<26;i++){
    button[i].addEventListener('click', clickRunner)
}


function clickRunner(){
    //var num = Integer.valueOf(this.id)
    var ltr = String.fromCharCode((parseInt(this.id)+64))
    checker(ltr)
}
let panel = document.querySelector('#wordPanel')

function checker(ltr){
    var check = word.includes(ltr)
    var index = word.indexOf(ltr)    
    if((check == true)){
        let dumer = document.getElementById(`${index}`)
        dumer.innerHTML = `<u>${word[index]}</u> `
        window.winCtr += 1
        window.score += 10
        setTimeout(playMaker, 100)
    }
    else{
        window.ctr += 1 
        if((window.wrongClick.indexOf(ltr)) == -1){
            window.loseCtr += 1
            hanger(window.ctr)
            window.wrongClick.push(ltr)
            window.score -= 2
            setTimeout(playMaker, 100)
        }     
    }
}

function playMaker(){
    if(window.winCtr == window.word.length){
        alert('You Won, Your score is')
        alert(score)
        window.history.go(-1)
        
    }
    else if(loseCtr == 6){
        alert('You lose')
        window.history.go(-1)
    }
}

for(var i=0;i<word.length;i++){
    panel.innerHTML += `<span id=${i}></span>`    
    
}
for(var j=0;j<word.length;j++){
    span = document.getElementById(`${j}`)
    span.innerHTML = "__  "
}

function imgChange(e){
    var div = document.getElementById('hangImg')
    div.innerHTML = ''
    var img = document.createElement('img')
    img.src = `images/hang-${e+1}.jpg`
    div.appendChild(img)

}

function hanger (e){
    switch (e) {
        case 1 :
            imgChange(1)
            break
        case 2 :
            imgChange(2)
            break
        case 3 :
            imgChange(3)
            break
        case 4 :
            imgChange(4)
            break   
        case 5 :
            imgChange(5)
            break
        case 6 :
            imgChange(6)
            break       
    }
}



