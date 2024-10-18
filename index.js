
let scoreAEl = document.getElementById("scoreA-el")
let scoreBEl = document.getElementById("scoreB-el")
let foulsAEl = document.getElementById("foulsA-el")
let foulsBEl = document.getElementById("foulsB-el")
let scoreA = 0
let scoreB = 0
let foulsA = 0
let foulsB = 0

function addScoreA1(){
    scoreA += 1
    scoreAEl.textContent = scoreA
}

function addScoreA2(){
    scoreA += 2
    scoreAEl.textContent = scoreA
}

function addScoreA3(){
    scoreA += 3
    scoreAEl.textContent = scoreA
}

function addScoreB1(){
    scoreB += 1
    scoreBEl.textContent = scoreB
}

function addScoreB2(){
    scoreB += 2
    scoreBEl.textContent = scoreB
}

function addScoreB3(){
    scoreB += 3
    scoreBEl.textContent = scoreB
}

function addFoulA(){
    foulsA += 1
    foulsAEl.textContent = "Fouls: " + foulsA
}

function addFoulB(){
    foulsB += 1
    foulsBEl.textContent = "Fouls: " + foulsB
 }
 
 function newGame(){
    scoreA = 0
    scoreB = 0
    foulsA = 0
    foulsB = 0
    scoreAEl.textContent = scoreA
    scoreBEl.textContent = scoreB
    foulsAEl.textContent = "Fouls: " + foulsA
    foulsBEl.textContent = "Fouls: " + foulsB
 }