import { convertToObject } from "typescript"
import questions from "./questions.json"

// console.log(questions.Thème.Nature[0].Question)
// console.log(questions.Thème.JeuxVidéos[1].GoodAwnser)
// console.log(questions.Thème.Films[1].Reponses[1])

// Nombre de questions de chaque thèmes
var NbQuestionsFilms:number = questions.Films.length
console.log(NbQuestionsFilms)
var NbQuestionsNature:number = questions.Nature.length
var NbQuestionsJeux:number = questions.JeuxVidéos.length

// Ajout des questions dans un tableau
var QuestionsFilms:string[] = []
for(let i = 0; i < NbQuestionsFilms; i++) {
    QuestionsFilms.push(questions.Films[i].Question)
}
console.log(QuestionsFilms)

// tirage aléatoire de n questions

function AffichageAleatoire() {

    // Création  d'un tableau pour les questions déjà apparues
    var QuestionsApparues:string[] = []

    // Nombre aléatoire
    var NbAleatoire:number = Math.floor(Math.random() * NbQuestionsFilms)
    console.log(NbAleatoire)

    // Affichage de la question avec ses réponses
    let Question:any = document.getElementById("Question") as HTMLElement
    Question.innerHTML = questions.Films[NbAleatoire].Question

    let Réponse1:any = document.getElementById("Réponse1") as HTMLElement
    Réponse1.innerHTML = questions.Films[NbAleatoire].Reponses[0]

    let Réponse2:any = document.getElementById("Réponse2") as HTMLElement
    Réponse2.innerHTML = questions.Films[NbAleatoire].Reponses[1]

    let Réponse3:any = document.getElementById("Réponse3") as HTMLElement
    Réponse3.innerHTML = questions.Films[NbAleatoire].Reponses[2]

    let Réponse4:any = document.getElementById("Réponse4") as HTMLElement
    Réponse4.innerHTML = questions.Films[NbAleatoire].Reponses[3]

    // Ajout des questions déjà apparues dans le tableau prévu à cet effet
    QuestionsApparues.push(questions.Films[NbAleatoire].Question)
    console.log(QuestionsApparues)

    // Supprime les questions étant déjà apparues du tableau des questions
    QuestionsFilms.splice(NbAleatoire, 1)
    console.log(QuestionsFilms)
}


// Affiche aléatoirement la première question
AffichageAleatoire()