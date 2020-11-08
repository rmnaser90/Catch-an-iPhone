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

strt.click(function () {
    if (!(start.getGameStatus().start)) {

        inputContainer.removeClass('hide')
    }
})

const render = function () {
    let gameStats = start.getGameStatus()
    if (gameStats.start) {
        timer.text(gameStats.timer + " seconds Left")
        iphoneContainer.css('position', 'relative')
        iphoneContainer.empty()
        strt.text('Catch the iPhones')
        inputContainer.addClass('hide')
        username.text("Name: " + gameStats.name)
        score.text("Score: " + gameStats.score)
        iPhoneLeft.text(gameStats.remainingIphones + " Left")
        level.text("Level: " + gameStats.level)
        let newIphones = gameStats.iphones
        for (const iphone of newIphones) {
            let newIphone = `
    <i id="${iphone.id}" class="fas fa-mobile-alt iphone"style="font-size: ${iphone.size}; color: ${iphone.color}; left:${iphone.posX}%; top:${iphone.posY}%;">
     
     </i>
    `

            iphoneContainer.append($(newIphone))


        }
    }else{
        timer.text('Best Game ever')
        iphoneContainer.empty()
        iphoneContainer.css('position', 'unset')
        strt.text('Start')
        


    }

}

