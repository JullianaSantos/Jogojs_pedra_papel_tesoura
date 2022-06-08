//Função do usuario
const getUserChoice = (userInput) => {
  if(userInput.toLocaleLowerCase() == 'pedra'){
      userInput = 'pedra'
  }else if(userInput.toLocaleLowerCase() == 'papel'){
      userInput = 'papel'
  }else if(userInput.toLocaleLowerCase() == 'tesoura'){
      userInput = 'tesoura'
  }else{
      console.log("A opção escolhida não existe, por favor, volte e escolha entre: pedra, papel ou tesoura!!")
  }
  return userInput
}

//Função do computador
const getComputerChoice = () => {
  let result = Math.floor(Math.random() * 3);

  if(result === 0){
      result = 'pedra'
  }else if(result === 1){
      result = 'papel'
  }else if(result === 2){
      result = 'tesoura'
  }
  return result
}

//Função Determina o vencedor!!
const determineWinner = (getUserChoice, getComputerChoice) => {
console.log(getUserChoice, getComputerChoice)
  if(getUserChoice == getComputerChoice){
    alert("Empatou")
  }else if(getUserChoice == 'pedra' && getComputerChoice == 'tesoura'){
    alert("Pedra Ganha da Tesoura")
  }else if(getUserChoice == 'pedra' && getComputerChoice == 'papel'){
    alert("Papel ganha da Pedra")
  }else if(getUserChoice == 'tesoura' && getComputerChoice == 'papel'){
    alert("Tesoura ganha do Papel")
  }else if(getUserChoice == 'tesoura' && getComputerChoice == 'pedra'){
    alert("Pedra ganha da Tesoura")
  }else if(getUserChoice == 'papel' && getComputerChoice == 'pedra'){
    alert("Papel ganha da pedra")
  }else if(getUserChoice == 'papel' && getComputerChoice == 'tesoura'){
    alert("Tesoura ganha do Papel")
  }
}

//Função PlayGame (Inicia o jogo)
const playGame = () => {
let userChoice = getUserChoice(prompt("Escolha Pedra, Papel ou Tesoura: "))
let computerChoice = getComputerChoice()
determineWinner(userChoice, computerChoice)
}

playGame()