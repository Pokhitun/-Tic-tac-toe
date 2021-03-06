let wraper = document.querySelector('.wraper');
let cells = document.querySelectorAll('.cell');
let btnNewGame = document.querySelector('.newGame'); 

let masX = [];
let masO = [];
let isPlayer1 = true;
let endGame = false;
let draw = false;

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click',function(){
        addInMass(i);
        checkWin(masX);
        checkWin(masO);
        showWin();
    })
  }

function addInMass(i){
    
         if(isPlayer1){// хід гравця х
            if(masX.indexOf(cells[i].id) === -1){//перевірка чи є ця клітинка в масиві
                if(masO.indexOf(cells[i].id) === -1){//перевірка ци цієї клітинки немає в масиві другого гравця
                    masX.push(cells[i].id);// додаємо в масив якщо пройдено всі перевірки
                    isPlayer1 = false;// міняємо хід гравця                    
                    document.getElementById(cells[i].id).innerHTML = 'x';
                }
            }
        }

        else if(!isPlayer1){
            if(masO.indexOf(cells[i].id) === -1){
                if(masX.indexOf(cells[i].id) === -1){
                    masO.push(cells[i].id);
                    isPlayer1 = true;                  
                    document.getElementById(cells[i].id).innerHTML = 'o';
                }
            }
    }
}

function checkWin(arr){
    if(arr.includes('1') && arr.includes('2') && arr.includes('3'))
        endGame = true;
    else if(arr.includes('4') && arr.includes('5') && arr.includes('6'))  
        endGame = true;
    else if(arr.includes('7') && arr.includes('8') && arr.includes('9'))  
        endGame = true;
    else if(arr.includes('1') && arr.includes('4') && arr.includes('7'))    
        endGame = true;   
    else if(arr.includes('2') && arr.includes('5') && arr.includes('8'))    
        endGame = true;    
    else if(arr.includes('3') && arr.includes('6') && arr.includes('9'))    
        endGame = true;
    else if(arr.includes('1') && arr.includes('5') && arr.includes('9'))    
        endGame = true; 
    else if(arr.includes('3') && arr.includes('5') && arr.includes('7'))    
        endGame = true; 
    else if(masO.length + masX.length == 9 && !endGame)
        draw = true;
}   

function showWin(){
    if(endGame){
        if(isPlayer1){
            document.querySelector('.winText').innerHTML= 'Виграли О';
            disabledButton();
        }
            
        else if (!isPlayer1) {
            document.querySelector('.winText').innerHTML= 'Виграли X';
            disabledButton();
        }
            
        
    }else if(draw){
        document.querySelector('.winText').innerHTML= 'Нічия';
        disabledButton();
    }
        

    

}

btnNewGame.addEventListener('click', function(){
    for(let i = 0; i< masX.length;i++){
        document.getElementById(masX[i]).innerHTML = '';
     }
     for(let i = 0; i< masO.length;i++){
        document.getElementById(masO[i]).innerHTML = '';
     }
     endGame = false;
     isPlayer1 = true;
     draw = false;
     masX = [];
     masO = [];
     document.querySelector('.winText').innerHTML= '';
     wraper.style.pointerEvents = 'auto';
})

function disabledButton(){
  wraper.style.pointerEvents = 'none';
}
