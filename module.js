const catchA = function () {
    let name = '';
    let score= 0 ;
    let level=1 ;
    let iphones=[{id: 'i1', posX: 6, posY: 8, color: 'red'}];
    let idCounter=1
   
    const randomColor = function () {
        let ranNum = function () {
            return Math.floor(Math.random() * 255)
        }
        let color = `rgb(${ranNum()},${ranNum()},${ranNum()})`
        return color
    }



    const addIphone = function (num) { 
for (let i = 0; i < num; i++) {
    idCounter++
    let newIphone = {
        id:  'i'+idCounter,
        posX: Math.floor(Math.random()*1000),
        posY: Math.floor(Math.random()*1000),
        color: randomColor()
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
        addIphone(level)
    }

   const gameOver = function () {
       iphones = []
       score = 0
       level = 0
       idCounter = 0
   }

   const getGameStatus = function () {
    let gameStatus={
        name,
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




    return {
        inputName,
        addIphone,
        removeIphone,
        advanceLevel,
        gameOver,
        getGameStatus
    }
}

const start=catchA()
start.inputName('Rami')
start.advanceLevel()
start.advanceLevel()
start.removeIphone('i1')
console.log(start.getGameStatus());