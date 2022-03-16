"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const questions_json_1 = __importDefault(require("./questions.json"));
// Variable définissant si une questions a été répondue ou non
let clicked = false;
// Variable pour le score définie à 0
let score = 0;
// Div HTML contenant le score
let Score = document.createElement("div");
// Création de la partie générale du quiz
let Quiz = document.getElementById("Quiz");
// Création des différents thèmes
let Film = document.createElement("div");
Film.classList.add("Thème");
Film.innerHTML = "Les Films";
Quiz.appendChild(Film);
let Nature = document.createElement("div");
Nature.classList.add("Thème");
Nature.innerHTML = "La nature";
Quiz.appendChild(Nature);
let Jeux = document.createElement("div");
Jeux.classList.add("Thème");
Jeux.innerHTML = "Les Jeux-Vidéos";
Quiz.appendChild(Jeux);
// Quand on choisit le thème "Film"
Film.addEventListener("click", function () {
    // Suppression des thèmes pour afficher le quiz
    Quiz.removeChild(Film);
    Quiz.removeChild(Nature);
    Quiz.removeChild(Jeux);
    // Nombre de questions de chaque thèmes
    var NbQuestionsFilms = questions_json_1.default.Films.length;
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
    // Création du quiz HTML
    // Création de la variable de la question
    let question = document.createElement("div");
    question.id = "Question";
    // Création des variables de la question et des réponses
    Quiz.appendChild(question);
    let GoodFeedBack = document.createElement("div");
    GoodFeedBack.classList.add("GoodFeedBack");
    GoodFeedBack.innerHTML = "Bravo, tu as trouvé la bonne réponse !";
    let BadFeedBack = document.createElement("div");
    BadFeedBack.classList.add("BadFeedBack");
    BadFeedBack.innerHTML = "Dommage, c'est la mauvaise réponse !";
    AffichageQuestion(question, NombreAleatoire);
    function CreateQuiz() {
        for (let i = 0; i < 4; i++) { // Magic number à effacer pour l'itération 4
            var reponse = document.createElement("div");
            reponse.classList.add("reponse");
            reponse.value = AffichageReponse(reponse, NombreAleatoire, i);
            reponse.id = "reponse" + i; // output ==> reponse0 ou reponse1 ou reponse2 ou reponse3
            Quiz.appendChild(reponse);
            AffichageReponse(reponse, NombreAleatoire, i);
            reponse.addEventListener("click", function () {
                if (clicked == false) {
                    if (Reponses[NombreAleatoire][i] == GoodAwnser[NombreAleatoire]) {
                        Quiz.appendChild(GoodFeedBack);
                        Scores();
                    }
                    else {
                        Quiz.appendChild(BadFeedBack);
                    }
                    clicked = true;
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
        let fin = document.createElement("div");
        Quiz.appendChild(fin);
        fin.innerHTML = "C'est la fin du Quiz";
        fin.classList.add("FinQuiz");
        let retour = document.createElement("a");
        Quiz.appendChild(retour);
        retour.innerHTML = "<- Retour";
        retour.href = "/localhost:1234";
    }
    // Active la fonction AffichageAleatoire() et la fonction ArrayEmpty() lors du click sur le bouton Valider
    submit.onclick = function () {
        if (clicked == false) {
            alert("Veuillez choisir une réponse");
        }
        else {
            // Redéfinission de la vérification si une question a été répondue ou non
            clicked = false;
            // Appelle la fonction supprimant la question déjà apparue
            DelQuestion();
            // Redéfini les nombre aléatoire
            let NombreAleatoire = NbAleatoire();
            AffichageQuestion(question, NombreAleatoire);
            for (let i = 0; i < 4; i++) {
                let reponse = document.getElementById("reponse" + i);
                AffichageReponse(reponse, NombreAleatoire, i);
            }
            // Supprime les class "GoodAnswer" et  "BadAnswer" qui ajoutent un fond à la réponse cliquée
            if (Quiz.contains(GoodFeedBack)) {
                Quiz.removeChild(GoodFeedBack);
            }
            else {
                Quiz.removeChild(BadFeedBack);
            }
        }
    };
});
// **********************************************************************************************************************************************************************
// Deuxième Quiz
// **********************************************************************************************************************************************************************
// Quand on choisit le Thème "Nature"
Nature.addEventListener("click", function () {
    // Suppression des thèmes pour afficher le quiz
    Quiz.removeChild(Film);
    Quiz.removeChild(Nature);
    Quiz.removeChild(Jeux);
    // Nombre de questions de chaque thèmes
    var NbQuestionsNature = questions_json_1.default.Nature.length;
    // Le nombre aléatoire mit dans une variable
    let NombreAleatoire = NbAleatoire();
    // Ajout des questions dans un tableau et des réponses dans un tableau
    var QuestionsNature = [];
    var Reponses = [];
    var GoodAwnser = [];
    // Ajout de tableaux dans le tableaux Reponses
    for (let i = 0; i < NbQuestionsNature; i++) {
        Reponses.push([]);
    }
    // Ajout des questions et de la bonne réponse
    for (let i = 0; i < NbQuestionsNature; i++) {
        QuestionsNature.push(questions_json_1.default.Nature[i].Question);
        GoodAwnser.push(questions_json_1.default.Nature[i].GoodAwnser);
    }
    // Ajout des reponses
    for (let i = 0; i < NbQuestionsNature; i++) {
        for (let j = 0; j < 4; j++) {
            Reponses[i].push(questions_json_1.default.Nature[i].Reponses[j]);
        }
    }
    console.log("les questions sont" + QuestionsNature);
    console.log(Reponses);
    // Création du quiz HTML
    // Création de la variable de la question
    let question = document.createElement("div");
    question.id = "Question";
    // Création des variables de la question et des réponses
    Quiz.appendChild(question);
    let GoodFeedBack = document.createElement("div");
    GoodFeedBack.classList.add("GoodFeedBack");
    GoodFeedBack.innerHTML = "Bravo, tu as trouvé la bonne réponse !";
    let BadFeedBack = document.createElement("div");
    BadFeedBack.classList.add("BadFeedBack");
    BadFeedBack.innerHTML = "Dommage, c'est la mauvaise réponse !";
    AffichageQuestion(question, NombreAleatoire);
    function CreateQuiz() {
        for (let i = 0; i < 4; i++) { // Magic number à effacer pour l'itération 4
            var reponse = document.createElement("div");
            reponse.classList.add("reponse");
            reponse.value = AffichageReponse(reponse, NombreAleatoire, i);
            reponse.id = "reponse" + i; // output ==> reponse0 ou reponse1 ou reponse2 ou reponse3
            Quiz.appendChild(reponse);
            AffichageReponse(reponse, NombreAleatoire, i);
            reponse.addEventListener("click", function () {
                if (clicked == false) {
                    if (Reponses[NombreAleatoire][i] == GoodAwnser[NombreAleatoire]) {
                        Quiz.appendChild(GoodFeedBack);
                        Scores();
                    }
                    else {
                        Quiz.appendChild(BadFeedBack);
                    }
                    clicked = true;
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
        if (NbQuestionsNature > 0) {
            var NbAleatoire = Math.floor(Math.random() * NbQuestionsNature);
        }
        else {
            NbAleatoire = -1;
        }
        return NbAleatoire;
    }
    // Affichage du score
    Quiz.appendChild(Score);
    Score.classList.add("Score");
    Score.innerHTML = score + " / " + questions_json_1.default.Nature.length;
    // Affichage des Questions
    function AffichageQuestion(question, NombreAleatoire) {
        if (NombreAleatoire >= 0) {
            question.innerHTML = QuestionsNature[NombreAleatoire];
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
        QuestionsNature.splice(NombreAleatoire, 1);
        Reponses.splice(NombreAleatoire, 1);
        NbQuestionsNature -= 1;
        console.log(QuestionsNature);
        GoodAwnser.splice(NombreAleatoire, 1);
    }
    // Fonction du score
    function Scores() {
        score += 1;
        Score.innerHTML = score + " / " + questions_json_1.default.Nature.length;
    }
    // Création de l'interface de fin du quiz
    function finQuiz() {
        let fin = document.createElement("div");
        Quiz.appendChild(fin);
        fin.innerHTML = "C'est la fin du Quiz";
        fin.classList.add("FinQuiz");
        let retour = document.createElement("a");
        Quiz.appendChild(retour);
        retour.innerHTML = "<- Retour";
        retour.href = "/localhost:1234";
    }
    // Active la fonction AffichageAleatoire() et la fonction ArrayEmpty() lors du click sur le bouton Valider
    submit.onclick = function () {
        if (clicked == false) {
            alert("Veuillez choisir une réponse");
        }
        else {
            // Redéfinission de la vérification si une question a été répondue ou non
            clicked = false;
            // Appelle la fonction supprimant la question déjà apparue
            DelQuestion();
            // Redéfini les nombre aléatoire
            let NombreAleatoire = NbAleatoire();
            AffichageQuestion(question, NombreAleatoire);
            for (let i = 0; i < 4; i++) {
                let reponse = document.getElementById("reponse" + i);
                AffichageReponse(reponse, NombreAleatoire, i);
            }
            // Supprime les class "GoodAnswer" et  "BadAnswer" qui ajoutent un fond à la réponse cliquée
            if (Quiz.contains(GoodFeedBack)) {
                Quiz.removeChild(GoodFeedBack);
            }
            else {
                Quiz.removeChild(BadFeedBack);
            }
        }
    };
});
// **********************************************************************************************************************************************************************
// Deuxième Quiz
// **********************************************************************************************************************************************************************
// Quand on choisit le Thème "Jeux"
Jeux.addEventListener("click", function () {
    // Suppression des thèmes pour afficher le quiz
    Quiz.removeChild(Film);
    Quiz.removeChild(Nature);
    Quiz.removeChild(Jeux);
    // Nombre de questions de chaque thèmes
    var NbQuestionsJeux = questions_json_1.default.JeuxVidéos.length;
    // Le nombre aléatoire mit dans une variable
    let NombreAleatoire = NbAleatoire();
    // Ajout des questions dans un tableau et des réponses dans un tableau
    var QuestionsJeux = [];
    var Reponses = [];
    var GoodAwnser = [];
    // Ajout de tableaux dans le tableaux Reponses
    for (let i = 0; i < NbQuestionsJeux; i++) {
        Reponses.push([]);
    }
    // Ajout des questions et de la bonne réponse
    for (let i = 0; i < NbQuestionsJeux; i++) {
        QuestionsJeux.push(questions_json_1.default.JeuxVidéos[i].Question);
        GoodAwnser.push(questions_json_1.default.JeuxVidéos[i].GoodAwnser);
    }
    // Ajout des reponses
    for (let i = 0; i < NbQuestionsJeux; i++) {
        for (let j = 0; j < 4; j++) {
            Reponses[i].push(questions_json_1.default.JeuxVidéos[i].Reponses[j]);
        }
    }
    console.log("les questions sont" + QuestionsJeux);
    console.log(Reponses);
    // Création du quiz HTML
    // Création de la variable de la question
    let question = document.createElement("div");
    question.id = "Question";
    // Création des variables de la question et des réponses
    Quiz.appendChild(question);
    let GoodFeedBack = document.createElement("div");
    GoodFeedBack.classList.add("GoodFeedBack");
    GoodFeedBack.innerHTML = "Bravo, tu as trouvé la bonne réponse !";
    let BadFeedBack = document.createElement("div");
    BadFeedBack.classList.add("BadFeedBack");
    BadFeedBack.innerHTML = "Dommage, c'est la mauvaise réponse !";
    AffichageQuestion(question, NombreAleatoire);
    function CreateQuiz() {
        for (let i = 0; i < 4; i++) { // Magic number à effacer pour l'itération 4
            var reponse = document.createElement("div");
            reponse.classList.add("reponse");
            reponse.value = AffichageReponse(reponse, NombreAleatoire, i);
            reponse.id = "reponse" + i; // output ==> reponse0 ou reponse1 ou reponse2 ou reponse3
            Quiz.appendChild(reponse);
            AffichageReponse(reponse, NombreAleatoire, i);
            reponse.addEventListener("click", function () {
                if (clicked == false) {
                    if (Reponses[NombreAleatoire][i] == GoodAwnser[NombreAleatoire]) {
                        Quiz.appendChild(GoodFeedBack);
                        Scores();
                    }
                    else {
                        Quiz.appendChild(BadFeedBack);
                    }
                    clicked = true;
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
        if (NbQuestionsJeux > 0) {
            var NbAleatoire = Math.floor(Math.random() * NbQuestionsJeux);
        }
        else {
            NbAleatoire = -1;
        }
        return NbAleatoire;
    }
    // Affichage du score
    Quiz.appendChild(Score);
    Score.classList.add("Score");
    Score.innerHTML = score + " / " + questions_json_1.default.JeuxVidéos.length;
    // Affichage des Questions
    function AffichageQuestion(question, NombreAleatoire) {
        if (NombreAleatoire >= 0) {
            question.innerHTML = QuestionsJeux[NombreAleatoire];
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
        QuestionsJeux.splice(NombreAleatoire, 1);
        Reponses.splice(NombreAleatoire, 1);
        NbQuestionsJeux -= 1;
        console.log(QuestionsJeux);
        GoodAwnser.splice(NombreAleatoire, 1);
    }
    // Fonction du score
    function Scores() {
        score += 1;
        Score.innerHTML = score + " / " + questions_json_1.default.JeuxVidéos.length;
    }
    // Création de l'interface de fin du quiz
    function finQuiz() {
        let fin = document.createElement("div");
        Quiz.appendChild(fin);
        fin.innerHTML = "C'est la fin du Quiz";
        fin.classList.add("FinQuiz");
        let retour = document.createElement("a");
        Quiz.appendChild(retour);
        retour.innerHTML = "<- Retour";
        retour.href = "/localhost:1234";
    }
    // Active la fonction AffichageAleatoire() et la fonction ArrayEmpty() lors du click sur le bouton Valider
    submit.onclick = function () {
        if (clicked == false) {
            alert("Veuillez choisir une réponse");
        }
        else {
            // Redéfinission de la vérification si une question a été répondue ou non
            clicked = false;
            // Appelle la fonction supprimant la question déjà apparue
            DelQuestion();
            // Redéfini les nombre aléatoire
            let NombreAleatoire = NbAleatoire();
            AffichageQuestion(question, NombreAleatoire);
            for (let i = 0; i < 4; i++) {
                let reponse = document.getElementById("reponse" + i);
                AffichageReponse(reponse, NombreAleatoire, i);
            }
            // Supprime les class "GoodAnswer" et  "BadAnswer" qui ajoutent un fond à la réponse cliquée
            if (Quiz.contains(GoodFeedBack)) {
                Quiz.removeChild(GoodFeedBack);
            }
            else {
                Quiz.removeChild(BadFeedBack);
            }
        }
    };
});
