let HomeScrEl = document.getElementById("scoreH")
let GuestScrEl = document.getElementById("scoreG")

let score1 = 0
let score2 = 0

function conditionsGuest() {
    if (score2 < 10)
        GuestScrEl.textContent = "0" + score2
    if (score1 < score2) {
        GuestScrEl.style.color = "green"
        HomeScrEl.style.color = "red"
    }
    if (score1 > score2) {
        HomeScrEl.style.color = "green"
        GuestScrEl.style.color = "red"
    }
    else {
        HomeScrEl.style.color = "red"
        GuestScrEl.style.color = "red"
    }
}

function conditionsHome() {
    if (score1 < 10)
        HomeScrEl.textContent = "0" + score1
    if (score1 < score2) {
        GuestScrEl.style.color = "green"
        HomeScrEl.style.color = "red"
    }
    if (score1 > score2) {
        HomeScrEl.style.color = "green"
        GuestScrEl.style.color = "red"
    }
    else {
        HomeScrEl.style.color = "red"
        GuestScrEl.style.color = "red"
    }
}

function Reset() {
    score1 = 0
    score2 = 0
    HomeScrEl.textContent = "0" + score1
    GuestScrEl.textContent = "0" + score2
    if (score1 == score2) {
        HomeScrEl.style.color = "red"
        GuestScrEl.style.color = "red"
    }
}



function incrementH1() {
    score1 = score1 + 1
    HomeScrEl.textContent = score1
    conditionsHome()

}

function incrementH2() {
    score1 = score1 + 2
    HomeScrEl.textContent = score1
    conditionsHome()
 
    }


function incrementH3() {
    score1 = score1 + 3
    HomeScrEl.textContent = score1
    conditionsHome()
}



function incrementG1() {
    score2 = score2 + 1
    GuestScrEl.textContent = score2
    conditionsGuest()
}

function incrementG2() {
    score2 = score2 + 2
    GuestScrEl.textContent = score2
    conditionsGuest()
}

function incrementG3() {
    score2 = score2 + 3
    GuestScrEl.textContent = score2
    conditionsGuest()

}





