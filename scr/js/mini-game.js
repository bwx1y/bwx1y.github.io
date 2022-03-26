

class Start {
    constructor() {
        this.playerName;
        this.botName = "BWX1Y"
        this.playerOption;
        this.botOption;
        this.winner = ""
    }

    get getBotOption() {
        return this.botOption;
    }

    set setBotOption(option) {
        this.botOption = option;
    }

    get getPlayerOption() {
        return this.playerOption
    }

    set setPlayerOption(option) {
        this.playerOption = option;
    }

    botBrain() {
        const option = ["🖐", "✌", "✊"];
        const bot = option[Math.floor(Math.random() * option.length)];
        return bot;
    }

    winCalculation() {
        if (this.botOption == "🖐" && this.playerOption == "✌") return this.winner = this.playerName;
        if (this.botOption == "🖐" && this.playerOption == "✊") return this.winner = this.botName;
        if (this.botOption == "✌" && this.playerOption == "🖐") return this.winner = this.botName;
        if (this.botOption == "✌" && this.playerOption == "✊") return this.winner = this.playerName
        if (this.botOption == "✊" && this.playerOption == "🖐") return this.winner = this.playerName
        if (this.botOption == "✊" && this.playerOption == "✌") return this.winner = this.botName;
        return this.winner = "SERI"
        
    }

    matchResult() {
        if (this.winner != "SERI") return `${this.winner} MENANG!`;
        return `WAAA ${this.winner}, GAK ADA YG MENANG 🤪`;
        
    }

    skor() {
        if (this.winner == this.playerName) {
            Menang++
            Mn.textContent = Menang;
        }
        else if (this.winner == this.botName) {
            Kalah++
            Kl.textContent = Kalah;
        }
        else {
            Seri++
            Sr.textContent = Seri;
        }
    }
}

const inGame = document.getElementById("inGame");
const result = document.getElementById("result");
const Mn = document.getElementById("Mn");
const Kl = document.getElementById("Kl");
const Sr = document.getElementById("Sr");
const start = new Start();
let Menang = 0;
let Kalah = 0;
let Seri = 0;


function pickOption(params) {
    start.setPlayerOption = params;
    start.setBotOption = start.botBrain();
    start.winCalculation();


    inGame.innerHTML = '<div class="loadingio-spinner-ellipsis-u0ov5uz2458"><div class="ldio-kym5jb1ekxj"><div></div><div></div><div></div><div></div><div></div></div></div>'
    result.textContent = "Loading"

    setTimeout(() => {
        inGame.textContent = `${start.getPlayerOption} VS ${start.getBotOption}`
        result.textContent = start.matchResult();
        start.skor();
    }, 1000);
}

const usr = Swal.fire({
    title: 'Welcome',
    input: 'text',
    inputLabel: 'Userame :',
    inputValidator: (value) => {
      if (!value) {
        return 'You need to write something!'
      }
    }
  }).then(({value: usr}) => {
      Swal.fire({
          title: "Username mu " + usr
      })
      start.playerName = usr;
  })
