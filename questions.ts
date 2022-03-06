import { convertToObject } from "typescript"
import questions from "./questions.json"


// Variable pour le score définie à 0
let score:number = 0
// Div HTML contenant le score
let Score:HTMLElement = document.createElement("div")

// Nombre de questions de chaque thèmes
var NbQuestionsFilms:number = questions.Films.length
console.log(NbQuestionsFilms)
var NbQuestionsNature:number = questions.Nature.length
var NbQuestionsJeux:number = questions.JeuxVidéos.length


// Le nombre aléatoire mit dans une variable
let NombreAleatoire = NbAleatoire()

// Ajout des questions dans un tableau et des réponses dans un tableau
var QuestionsFilms:string[] = []
var Reponses:any[] = []
var GoodAwnser:string[] = []
// Ajout de tableaux dans le tableaux Reponses
for(let i:number = 0; i < NbQuestionsFilms; i++) {
    Reponses.push([])
}
// Ajout des questions et de la bonne réponse
for(let i:number = 0; i < NbQuestionsFilms; i++) {
    QuestionsFilms.push(questions.Films[i].Question)
    GoodAwnser.push(questions.Films[i].GoodAwnser)
}
// Ajout des reponses
for(let i:number = 0; i < NbQuestionsFilms; i++) {
    for(let j = 0; j < 4; j++) {
        Reponses[i].push(questions.Films[i].Reponses[j])
    }
}
console.log("les questions sont" + QuestionsFilms)
console.log(Reponses)

let Quiz:any = document.getElementById("Quiz")

// Création du quiz HTML

    
// Création de la variable de la question
let question:HTMLElement = document.createElement("div")
question.id = "Question"
// Création des variables de la question et des réponses
Quiz.appendChild(question)

AffichageQuestion(question, NombreAleatoire)
function CreateQuiz() {
    for(let i:number = 0; i < 4; i++){  // Magic number à effacer pour l'itération 4
        var reponse:any = document.createElement("div")
        reponse.classList.add("reponse")
        reponse.value = AffichageReponse(reponse, NombreAleatoire, i)
        reponse.id = "reponse" + i // output ==> reponse0 ou reponse1 ou reponse2 ou reponse3
            
        Quiz.appendChild(reponse)
            
        AffichageReponse(reponse, NombreAleatoire, i)
            
        reponse.addEventListener("click", function(event:any){
        
            if(Reponses[NombreAleatoire][i] == GoodAwnser[NombreAleatoire]) {
                reponse.classList.add("GoodAnswer")
                Scores()
            }else{
                reponse.classList.add("BadAnswer")
            }
        
        })

    }
    return reponse
}

let reponse = CreateQuiz()



// Création du bouton de validation
const submit = document.createElement("button")
submit.id = "submit"
submit.innerHTML = "validé"

Quiz.appendChild(submit)

// Fonction générant un nombre aléatoire
function NbAleatoire() {
    if(NbQuestionsFilms > 0) {
        var NbAleatoire:number = Math.floor(Math.random()*NbQuestionsFilms)
    } else{
        NbAleatoire = -1
    }

    return NbAleatoire
}

// Affichage du score
Quiz.appendChild(Score)
Score.classList.add("Score")
Score.innerHTML = score + " / " + questions.Films.length

// Affichage des Questions
function AffichageQuestion(question:any, NombreAleatoire:any) {
    if(NombreAleatoire >= 0) {
        question.innerHTML = QuestionsFilms[NombreAleatoire]
    } else{
        Quiz.removeChild(question)
        Quiz.removeChild(submit)
        finQuiz()
    }
}



// Affichage des Réponses
function AffichageReponse(reponse:any, NombreAleatoire:any, index:number) {

    console.log(NombreAleatoire)

    if(NombreAleatoire >= 0) {
            reponse.innerHTML = Reponses[NombreAleatoire][index]

        // Affichage des Questions ainsi que des réponses (aléatoirement)
        
    }
    else{
        Quiz.removeChild(reponse)
    }
}

// Fonctioon supprimant la question qui est apparue
function DelQuestion() {
    QuestionsFilms.splice(NombreAleatoire, 1)
    Reponses.splice(NombreAleatoire, 1)
    NbQuestionsFilms -= 1
    console.log(QuestionsFilms)
    GoodAwnser.splice(NombreAleatoire, 1)
}

// Fonction du score
function Scores() {
    score += 1
    Score.innerHTML = score + " / " + questions.Films.length
}

// Création de l'interface de fin du quiz
function finQuiz() {
    var fin = document.createElement("div")
    Quiz.appendChild(fin)
    fin.innerHTML = "C'est la fin du Quiz"
    fin.classList.add("FinQuiz")
}

// Active la fonction AffichageAleatoire() et la fonction ArrayEmpty() lors du click sur le bouton Valider
submit.onclick = function() {
    // Appelle la fonction supprimant la question déjà apparue
    DelQuestion()
    // Redéfini les nombre aléatoire
    let NombreAleatoire:number = NbAleatoire()
    AffichageQuestion(question, NombreAleatoire)
    for(let i:number=0; i < 4; i++){
        reponse = document.getElementById("reponse" + i)
        AffichageReponse(reponse, NombreAleatoire, i)
    }
    // Supprime les class "GoodAnswer" et  "BadAnswer" qui ajoutent un fond à la réponse cliquée
    reponse.classList.remove("GoodAnswer")
    reponse.classList.remove("BadAnswer")
    
}