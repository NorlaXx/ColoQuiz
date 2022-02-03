import questions from "./questions.json"

// console.log(questions.Thème.Nature[0].Question)
// console.log(questions.Thème.JeuxVidéos[1].GoodAwnser)
// console.log(questions.Thème.Films[1].Reponses[1])

// Affichage de la question
let Question:any = document.getElementById("Question") as HTMLElement
Question.innerHTML = questions.Films[0].Question

let Réponse1:any = document.getElementById("Réponse1") as HTMLElement
Réponse1.innerHTML = questions.Films[0].Reponses[0]

let Réponse2:any = document.getElementById("Réponse2") as HTMLElement
Réponse2.innerHTML = questions.Films[0].Reponses[1]

let Réponse3:any = document.getElementById("Réponse3") as HTMLElement
Réponse3.innerHTML = questions.Films[0].Reponses[2]

let Réponse4:any = document.getElementById("Réponse4") as HTMLElement
Réponse4.innerHTML = questions.Films[0].Reponses[3]