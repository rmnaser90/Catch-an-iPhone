
const cls = $('#close')
const inputContainer = $('#inputContainer')
const strt = $('#start')
const username = $('.name')
const score = $('.score')
const iPhoneLeft = $('#iphonesLeft')
const level = $('#level')
const iphoneContainer = $('#iphoneContainer')
const timer = $('.timer')
cls.click(function () {
    inputContainer.addClass('hide')
})



const render = function () {
    let gameStats = start.getGameStatus()
    if (gameStats.start) {
        timer.text(gameStats.timer)
        iphoneContainer.css('position', 'relative')
        iphoneContainer.empty()
        strt.text('Catch the \n iPhones')
        inputContainer.addClass('hide')
        username.text(gameStats.name)
        score.text("Score: " + gameStats.score)
        iPhoneLeft.text(gameStats.remainingIphones + " Left")
        level.text("Level: " + gameStats.level)
        let newIphones = gameStats.iphones
        for (const iphone of newIphones) {
            let newIphone = `
    <i id="${iphone.id}" class="fas fa-mobile iphone"style="font-size: ${iphone.size}; color: ${iphone.color}; left:${iphone.posX}%; top:${iphone.posY}%;">
     
     </i>
    `

            iphoneContainer.append($(newIphone))


        }
    } else {
        timer.html('Game <br> Over')
        iphoneContainer.empty()
        let clickToStart = `<p>Created By: <br> Rami Naser Aldin</p>
        <i class="fas fa-mobile-alt" style="align-self: start; font-size: 100px;"></i> 
    `
        iphoneContainer.append($(clickToStart))
        iphoneContainer.css('position', 'unset')
        strt.text('Play again')



    }

}

