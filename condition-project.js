// name section

let name = prompt('Please insert your name')
let nameHTML = document.querySelector('div.text1>strong>span#myName')
nameHTML.innerHTML = name

// time section

function showTime(){
    const currentTime = new Date()
    let timeDayStr = String(currentTime.getDay())
    const timeHourStr = ((String(currentTime.getHours()) < 10 ? '0' : '') + String(currentTime.getHours()))
    const timeMinsStr = ((String(currentTime.getMinutes()) < 10 ? '0' : '') + String(currentTime.getMinutes()))
    const timeSecsStr = ((String(currentTime.getSeconds()) < 10 ? '0' : '') + String(currentTime.getSeconds()))
    switch(timeDayStr){
        case '1':
            timeDayStr = 'Pazartesi'
            break
        case '2':
            timeDayStr = 'Salı'
            break
        case '3':
            timeDayStr = 'Çarşamba'
            break
        case '4':
            timeDayStr = 'Perşembe'
            break
        case '5':
            timeDayStr = 'Cuma'
            break
        case '6':
            timeDayStr = 'Cumartesi'
            break
        default:
            timeDayStr = 'Pazar'
    }
    const timeDisplay = document.querySelector('div#myClock')
    timeDisplay.innerHTML = `${timeHourStr}:${timeMinsStr}:${timeSecsStr} ${timeDayStr}`

}

setInterval(showTime,1000)

