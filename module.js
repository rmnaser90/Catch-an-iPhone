const catchA = function () {
    let name = '';
    let start = false;
    let score= 0 ;
    let level=1 ;
    let iphones=[];
    let idCounter=1
    let timer = 2
   
    const randomColor = function () {
        let ranNum = function () {
            return Math.floor(Math.random() * 255)
        }
        let color = `rgb(${ranNum()},${ranNum()},${ranNum()})`
        return color
    }



    const addIphone = function (num) { 
        let ranNum = function () {
            let size = Math.floor(Math.random() * 100)

            if (size<10) {
               size = 10 
            } 
            return size
        }
for (let i = 0; i < num; i++) {
    idCounter++
    
    let newIphone = {
        id:  'i'+idCounter,
        posX: Math.floor(Math.random()*90),
        posY: Math.floor(Math.random()*90),
        color: randomColor(),
        size: ranNum() + 'px'
    }
    iphones.push(newIphone)
    
}

     
    }

    const removeIphone = function (iphoneId) {
        score++
       for (let i = 0; i < iphones.length; i++) {
           
        if (iphones[i].id == iphoneId) {

            iphones.splice(i,1)
            
        }
           
       }
        
    }
   

    const advanceLevel = function () {
        level++
        timer =level+2
        addIphone(level)
    }
    const decTimer = function () {
        timer--;
    }

   const gameOver = function () {
    alert('missed the iphones')
       start=false
       iphones = []
       score = 0
       level = 0
       idCounter = 0
       timer = 2
      
   }

   const getGameStatus = function () {
    let gameStatus={
        name,
        timer,
        start,
        score,
        level,
        remainingIphones: iphones.length,
        iphones
    }
    return gameStatus
       
   }
   const inputName = function (nam) {
       
    name = nam
   }
   const startGame = function () {
       start = true
   }




    return {
        inputName,
        addIphone,
        removeIphone,
        advanceLevel,
        gameOver,
        getGameStatus,
        startGame,
        decTimer
    }
}

const start=catchA()

