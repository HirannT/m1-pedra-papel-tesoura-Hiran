function playRockPaperScissor(player1, player2) {

    let result = '';

    if ((player1 =="Tesoura" && player2 =="Papel") || (player1 =="Pedra" && player2 =="Tesoura") || (player1 == "Papel" &&  player2 == "Pedra")) {
        result = "Jogador 1 venceu!";
    } else if ((player2 =="Tesoura" && player1 =="Papel") || (player2 =="Pedra" && player1 =="Tesoura") || (player2 == "Papel" &&  player1 == "Pedra")) {
        result = "Jogador 2 venceu!";
    } else if ((player1 =="Tesoura" && player2 =="Tesoura") || (player1 =="Pedra" && player2 =="Pedra") || (player1 == "Papel" &&  player2 == "Papel")) {
        result = "Empate!";
    }
   
    return result;
}