"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const questions_json_1 = __importDefault(require("./questions.json"));
// console.log(questions.Thème.Nature[0].Question)
// console.log(questions.Thème.JeuxVidéos[1].GoodAwnser)
// console.log(questions.Thème.Films[1].Reponses[1])
// Variable du bouton submit
const submit = document.getElementById("submit");
// Nombre de questions de chaque thèmes
var NbQuestionsFilms = questions_json_1.default.Films.length;
console.log(NbQuestionsFilms);
var NbQuestionsNature = questions_json_1.default.Nature.length;
var NbQuestionsJeux = questions_json_1.default.JeuxVidéos.length;
// Ajout des questions dans un tableau et des réponses dans un tableau
var QuestionsFilms = [];
var Reponses = [];
var GoodAwnser = [];
// Ajout de tableaux dans le tableaux Reponses
for (let i = 0; i < NbQuestionsFilms; i++) {
    Reponses.push([]);
}
// Ajout des questions et de la bonne réponse
for (let i = 0; i < NbQuestionsFilms; i++) {
    QuestionsFilms.push(questions_json_1.default.Films[i].Question);
    GoodAwnser.push(questions_json_1.default.Films[i].GoodAwnser);
}
// Ajout des reponses
for (let i = 0; i < NbQuestionsFilms; i++) {
    for (let j = 0; j < 4; j++) {
        Reponses[i].push(questions_json_1.default.Films[i].Reponses[j]);
    }
}
console.log(QuestionsFilms);
console.log(Reponses);
// tirage aléatoire de n questions
function AffichageAleatoire() {
    // Création  d'un tableau pour les questions déjà apparues
    var QuestionsApparues = [];
    // Nombre aléatoire
    var NbAleatoire = Math.floor(Math.random() * NbQuestionsFilms);
    console.log(NbAleatoire);
    // Affichage de la question avec ses réponses
    let Question = document.getElementById("Question");
    Question.innerHTML = QuestionsFilms[NbAleatoire];
    let Réponse1 = document.getElementById("Réponse1");
    Réponse1.innerHTML = Reponses[NbAleatoire][0];
    let Réponse2 = document.getElementById("Réponse2");
    Réponse2.innerHTML = Reponses[NbAleatoire][1];
    let Réponse3 = document.getElementById("Réponse3");
    Réponse3.innerHTML = Reponses[NbAleatoire][2];
    let Réponse4 = document.getElementById("Réponse4");
    Réponse4.innerHTML = Reponses[NbAleatoire][3];
    // Ajout des questions déjà apparues dans le tableau prévu à cet effet
    QuestionsApparues.push(questions_json_1.default.Films[NbAleatoire].Question);
    console.log(QuestionsApparues);
    // Supprime les questions étant déjà apparues du tableau des questions
    QuestionsFilms.splice(NbAleatoire, 1);
    console.log(QuestionsFilms);
    // Supprime les réponses déjà apparues du tableaux des reponses
    Reponses.splice(NbAleatoire, 1);
}
// Fonction vérifiant si il y a envore des éléments dans le tableau des questions
function ArrayEmpty() {
    if (QuestionsFilms.length == 0) {
        let quizEnd = document.getElementById("QuizEnd");
        quizEnd.innerHTML = "C'est la fin du quiz, RETOUR";
        quizEnd.href = "http://localhost:1234";
    }
    else {
        return;
    }
}
var score = 0;
// Fonction vérifiant si la réponse est bonne
function verify(reponse, index) {
    if (reponse == GoodAwnser[index]) {
        alert("Bonne réponse");
        score++;
    }
    else {
        alert("Mauvaise Réponse");
    }
}
// Active la fonction AffichageAleatoire() et la fonction ArrayEmpty() lors du click sur le bouton Valider
submit.onclick = function () {
    AffichageAleatoire();
    ArrayEmpty();
    verify(this.value, 0);
};
// Affiche aléatoirement la première question
AffichageAleatoire();
