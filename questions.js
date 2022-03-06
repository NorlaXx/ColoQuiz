"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const questions_json_1 = __importDefault(require("./questions.json"));
// Variable pour le score définie à 0
let score = 0;
// Div HTML contenant le score
let Score = document.createElement("div");
// Nombre de questions de chaque thèmes
var NbQuestionsFilms = questions_json_1.default.Films.length;
console.log(NbQuestionsFilms);
var NbQuestionsNature = questions_json_1.default.Nature.length;
var NbQuestionsJeux = questions_json_1.default.JeuxVidéos.length;
// Le nombre aléatoire mit dans une variable
let NombreAleatoire = NbAleatoire();
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
console.log("les questions sont" + QuestionsFilms);
console.log(Reponses);
let Quiz = document.getElementById("Quiz");
// Création du quiz HTML
// Création de la variable de la question
let question = document.createElement("div");
question.id = "Question";
// Création des variables de la question et des réponses
Quiz.appendChild(question);
AffichageQuestion(question, NombreAleatoire);
function CreateQuiz() {
    for (let i = 0; i < 4; i++) { // Magic number à effacer pour l'itération 4
        var reponse = document.createElement("div");
        reponse.classList.add("reponse");
        reponse.value = AffichageReponse(reponse, NombreAleatoire, i);
        reponse.id = "reponse" + i; // output ==> reponse0 ou reponse1 ou reponse2 ou reponse3
        Quiz.appendChild(reponse);
        AffichageReponse(reponse, NombreAleatoire, i);
        reponse.addEventListener("click", function (event) {
            if (Reponses[NombreAleatoire][i] == GoodAwnser[NombreAleatoire]) {
                reponse.classList.add("GoodAnswer");
                Scores();
            }
            else {
                reponse.classList.add("BadAnswer");
            }
        });
    }
    return reponse;
}
let reponse = CreateQuiz();
// Création du bouton de validation
const submit = document.createElement("button");
submit.id = "submit";
submit.innerHTML = "validé";
Quiz.appendChild(submit);
// Fonction générant un nombre aléatoire
function NbAleatoire() {
    if (NbQuestionsFilms > 0) {
        var NbAleatoire = Math.floor(Math.random() * NbQuestionsFilms);
    }
    else {
        NbAleatoire = -1;
    }
    return NbAleatoire;
}
// Affichage du score
Quiz.appendChild(Score);
Score.classList.add("Score");
Score.innerHTML = score + " / " + questions_json_1.default.Films.length;
// Affichage des Questions
function AffichageQuestion(question, NombreAleatoire) {
    if (NombreAleatoire >= 0) {
        question.innerHTML = QuestionsFilms[NombreAleatoire];
    }
    else {
        Quiz.removeChild(question);
        Quiz.removeChild(submit);
        finQuiz();
    }
}
// Affichage des Réponses
function AffichageReponse(reponse, NombreAleatoire, index) {
    console.log(NombreAleatoire);
    if (NombreAleatoire >= 0) {
        reponse.innerHTML = Reponses[NombreAleatoire][index];
        // Affichage des Questions ainsi que des réponses (aléatoirement)
    }
    else {
        Quiz.removeChild(reponse);
    }
}
// Fonctioon supprimant la question qui est apparue
function DelQuestion() {
    QuestionsFilms.splice(NombreAleatoire, 1);
    Reponses.splice(NombreAleatoire, 1);
    NbQuestionsFilms -= 1;
    console.log(QuestionsFilms);
    GoodAwnser.splice(NombreAleatoire, 1);
}
// Fonction du score
function Scores() {
    score += 1;
    Score.innerHTML = score + " / " + questions_json_1.default.Films.length;
}
// Création de l'interface de fin du quiz
function finQuiz() {
    var fin = document.createElement("div");
    Quiz.appendChild(fin);
    fin.innerHTML = "C'est la fin du Quiz";
    fin.classList.add("FinQuiz");
}
// Active la fonction AffichageAleatoire() et la fonction ArrayEmpty() lors du click sur le bouton Valider
submit.onclick = function () {
    // Appelle la fonction supprimant la question déjà apparue
    DelQuestion();
    // Redéfini les nombre aléatoire
    let NombreAleatoire = NbAleatoire();
    AffichageQuestion(question, NombreAleatoire);
    for (let i = 0; i < 4; i++) {
        reponse = document.getElementById("reponse" + i);
        AffichageReponse(reponse, NombreAleatoire, i);
    }
    // Supprime les class "GoodAnswer" et  "BadAnswer" qui ajoutent un fond à la réponse cliquée
    reponse.classList.remove("GoodAnswer");
    reponse.classList.remove("BadAnswer");
};
