var val = prompt("Enter Rock , paper or scissor")

function computerSelection(){
    var action = Math.floor(Math.random()*3)
    if (action === 0){
        return 'r';
    }
    else if (action === 1){
         return 'p'
    }
    else return 's'
}
function playerSelection(val){
    const text = val.slice(0,1)
    let result = text.toLowerCase()
    return result
}

function game(computerSelection , playerSelection){
    if(computerSelection === playerSelection){
        let result = `You chose:${playerSelection} | Computer chose:${computerSelection}  Draw again`
        return result
    }
    else if (computerSelection === 'r' && playerSelection === 'p'){
        let result2 = `You chose:${playerSelection} | Computer chose:${computerSelection} || You wi`
        return result2
    }
    else if (computerSelection === 'r' && playerSelection === 's'){
        let result2 = `You chose:${playerSelection} | Computer chose:${computerSelection} You loose`
        return result2
    }
    else if (computerSelection === 'p' && playerSelection === 's'){
        let result2 = `You chose:${playerSelection} | Computer chose:${computerSelection} You win`
        return result2
    }
    else if (computerSelection === 'p' && playerSelection === 'r'){
        let result2 = `You chose:${playerSelection} | Computer chose:${computerSelection} You loose`
        return result2
    }
    else if (computerSelection === 's' && playerSelection === 'r'){
        let result2 = `You chose:${playerSelection} | Computer chose:${computerSelection} You win`
        return result2
    }
    else if (computerSelection === 's' && playerSelection === 'p'){
        let result2 = `You chose:${playerSelection} | Computer chose:${computerSelection} You loose`
        return result2
    }
    else return 'Enter valid input'
}

console.log(game(computerSelection() , playerSelection(val)))
