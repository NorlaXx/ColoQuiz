"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const questions_json_1 = __importDefault(require("./questions.json"));
// console.log(questions.Thème.Nature[0].Question)
// console.log(questions.Thème.JeuxVidéos[1].GoodAwnser)
// console.log(questions.Thème.Films[1].Reponses[1])
// Nombre de questions de chaque thèmes
var NbQuestionsFilms = questions_json_1.default.Films.length;
console.log(NbQuestionsFilms);
var NbQuestionsNature = questions_json_1.default.Nature.length;
var NbQuestionsJeux = questions_json_1.default.JeuxVidéos.length;
// Ajout des questions dans un tableau
var QuestionsFilms = [];
for (let i = 0; i < NbQuestionsFilms; i++) {
    QuestionsFilms.push(questions_json_1.default.Films[i].Question);
}
console.log(QuestionsFilms);
// tirage aléatoire de n questions
function AffichageAleatoire() {
    // Création  d'un tableau pour les questions déjà apparues
    var QuestionsApparues = [];
    // Nombre aléatoire
    var NbAleatoire = Math.floor(Math.random() * NbQuestionsFilms);
    console.log(NbAleatoire);
    // Affichage de la question avec ses réponses
    let Question = document.getElementById("Question");
    Question.innerHTML = questions_json_1.default.Films[NbAleatoire].Question;
    let Réponse1 = document.getElementById("Réponse1");
    Réponse1.innerHTML = questions_json_1.default.Films[NbAleatoire].Reponses[0];
    let Réponse2 = document.getElementById("Réponse2");
    Réponse2.innerHTML = questions_json_1.default.Films[NbAleatoire].Reponses[1];
    let Réponse3 = document.getElementById("Réponse3");
    Réponse3.innerHTML = questions_json_1.default.Films[NbAleatoire].Reponses[2];
    let Réponse4 = document.getElementById("Réponse4");
    Réponse4.innerHTML = questions_json_1.default.Films[NbAleatoire].Reponses[3];
    // Ajout des questions déjà apparues dans le tableau prévu à cet effet
    QuestionsApparues.push(questions_json_1.default.Films[NbAleatoire].Question);
    console.log(QuestionsApparues);
    // Supprime les questions étant déjà apparues du tableau des questions
    QuestionsFilms.splice(NbAleatoire, 1);
    console.log(QuestionsFilms);
}
// Affiche aléatoirement la première question
AffichageAleatoire();
