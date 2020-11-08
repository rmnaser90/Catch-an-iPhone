const play = $('#btnStart')
const input = $('#input')
const iphone = $(".iphone")
play.click(function () {
    if (!(start.getGameStatus().start)) {
       
        start.addIphone(1)
        start.startGame()
        start.inputName(input.val())
        input.val('')
        let myTime = setInterval(() => {
            start.decTimer()
            if (start.getGameStatus().timer<0) {
                start.gameOver()
                clearInterval(myTime)
                console.log('end');
                render()
            }
            render()
        }, 1000);
        render()
    }



})

iphoneContainer.on('click', '.iphone', function () {
    let iphoneID = $(this).attr('id')
    start.removeIphone(iphoneID)
    console.log(iphoneID);
    render()
    if (start.getGameStatus().remainingIphones == 0) {
        start.advanceLevel()
        render()
    }
})

