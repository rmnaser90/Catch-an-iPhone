const play = $('#btnStart')
const input = $('#input')
const iphone = $(".iphone")
// gets the name from local Storage if exist

    start.inputName(localStorage.getItem('name')|| '')

const initGame=function () {
    
    if (!(start.getGameStatus().start)) {
       
        start.addIphone(1)
        start.startGame()
        
        let myTime = setInterval(() => {
            start.decTimer()
            if (start.getGameStatus().timer<0) {
                start.gameOver()
                clearInterval(myTime)
                render()
            }
            render()
        }, 1000);
        render()
    }



}
play.click(function () {
    
    start.inputName(input.val())
        input.val('')

        initGame()
})


strt.click(function () {
    if (!(start.getGameStatus().start) && start.getGameStatus().name== '') {

        inputContainer.removeClass('hide')
    }else{

        initGame()
    }
})



iphoneContainer.on('click', '.iphone', function () {
    let iphoneID = $(this).attr('id')
    start.removeIphone(iphoneID)
    render()
    if (start.getGameStatus().remainingIphones == 0) {
        start.advanceLevel()
        render()
    }
})

