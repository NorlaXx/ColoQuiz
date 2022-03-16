import { convertToObject } from "typescript"
import questions from "./questions.json"


// Variable définissant si une questions a été répondue ou non
let clicked:boolean = false
// Variable pour le score définie à 0
let score:number = 0
// Div HTML contenant le score
let Score:HTMLElement = document.createElement("div")

// Création de la partie générale du quiz
let Quiz:any = document.getElementById("Quiz")

// Création des différents thèmes
let Film:HTMLElement = document.createElement("div")
Film.classList.add("Thème")
Film.innerHTML = "Les Films"
Quiz.appendChild(Film)

let Nature:HTMLElement = document.createElement("div")
Nature.classList.add("Thème")
Nature.innerHTML = "La nature"
Quiz.appendChild(Nature)

let Jeux:HTMLElement = document.createElement("div")
Jeux.classList.add("Thème")
Jeux.innerHTML = "Les Jeux-Vidéos"
Quiz.appendChild(Jeux)


// Quand on choisit le thème "Film"
Film.addEventListener("click", function(){
    // Suppression des thèmes pour afficher le quiz
    Quiz.removeChild(Film)
    Quiz.removeChild(Nature)
    Quiz.removeChild(Jeux)

    // Nombre de questions de chaque thèmes
    var NbQuestionsFilms:number = questions.Films.length

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



    // Création du quiz HTML

        
    // Création de la variable de la question
    let question:HTMLElement = document.createElement("div")
    question.id = "Question"
    // Création des variables de la question et des réponses
    Quiz.appendChild(question)

    let GoodFeedBack = document.createElement("div")
    GoodFeedBack.classList.add("GoodFeedBack")
    GoodFeedBack.innerHTML = "Bravo, tu as trouvé la bonne réponse !"

    let BadFeedBack = document.createElement("div")
    BadFeedBack.classList.add("BadFeedBack")
    BadFeedBack.innerHTML = "Dommage, c'est la mauvaise réponse !"

    AffichageQuestion(question, NombreAleatoire)
    function CreateQuiz() {
        for(let i:number = 0; i < 4; i++){  // Magic number à effacer pour l'itération 4
            var reponse:any = document.createElement("div")
            reponse.classList.add("reponse")
            reponse.value = AffichageReponse(reponse, NombreAleatoire, i)
            reponse.id = "reponse" + i // output ==> reponse0 ou reponse1 ou reponse2 ou reponse3
                
            Quiz.appendChild(reponse)
                
            AffichageReponse(reponse, NombreAleatoire, i)

                reponse.addEventListener("click", function(){
                    if(clicked == false){
                        if(Reponses[NombreAleatoire][i] == GoodAwnser[NombreAleatoire]) {
                        
                            Quiz.appendChild(GoodFeedBack)
                            Scores()
                        }else{
                            Quiz.appendChild(BadFeedBack)
                        }
                        clicked = true
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
        let fin:HTMLElement = document.createElement("div")
        Quiz.appendChild(fin)
        fin.innerHTML = "C'est la fin du Quiz"
        fin.classList.add("FinQuiz")
        let retour:any = document.createElement("a")
        Quiz.appendChild(retour)
        retour.innerHTML = "<- Retour"
        retour.href = "/localhost:1234"

    }

    // Active la fonction AffichageAleatoire() et la fonction ArrayEmpty() lors du click sur le bouton Valider
    submit.onclick = function() {
        if(clicked == false){
            alert("Veuillez choisir une réponse")
        }else {
            // Redéfinission de la vérification si une question a été répondue ou non
        clicked = false
        // Appelle la fonction supprimant la question déjà apparue
        DelQuestion()
        // Redéfini les nombre aléatoire
        let NombreAleatoire:number = NbAleatoire()
        AffichageQuestion(question, NombreAleatoire)
        for(let i:number=0; i < 4; i++){
            let reponse = document.getElementById("reponse" + i)
            AffichageReponse(reponse, NombreAleatoire, i)
        }
        // Supprime les class "GoodAnswer" et  "BadAnswer" qui ajoutent un fond à la réponse cliquée
        if(Quiz.contains(GoodFeedBack)){
            Quiz.removeChild(GoodFeedBack)
        }else{
            Quiz.removeChild(BadFeedBack)
        }
        }
        
    }
})

// **********************************************************************************************************************************************************************

// Deuxième Quiz

// **********************************************************************************************************************************************************************
// Quand on choisit le Thème "Nature"
Nature.addEventListener("click", function(){
    // Suppression des thèmes pour afficher le quiz
    Quiz.removeChild(Film)
    Quiz.removeChild(Nature)
    Quiz.removeChild(Jeux)

    // Nombre de questions de chaque thèmes
    var NbQuestionsNature:number = questions.Nature.length

    // Le nombre aléatoire mit dans une variable
    let NombreAleatoire = NbAleatoire()

    // Ajout des questions dans un tableau et des réponses dans un tableau
    var QuestionsNature:string[] = []
    var Reponses:any[] = []
    var GoodAwnser:string[] = []
    // Ajout de tableaux dans le tableaux Reponses
    for(let i:number = 0; i < NbQuestionsNature; i++) {
        Reponses.push([])
    }
    // Ajout des questions et de la bonne réponse
    for(let i:number = 0; i < NbQuestionsNature; i++) {
        QuestionsNature.push(questions.Nature[i].Question)
        GoodAwnser.push(questions.Nature[i].GoodAwnser)
    }
    // Ajout des reponses
    for(let i:number = 0; i < NbQuestionsNature; i++) {
        for(let j = 0; j < 4; j++) {
            Reponses[i].push(questions.Nature[i].Reponses[j])
        }
    }
    console.log("les questions sont" + QuestionsNature)
    console.log(Reponses)



    // Création du quiz HTML

        
    // Création de la variable de la question
    let question:HTMLElement = document.createElement("div")
    question.id = "Question"
    // Création des variables de la question et des réponses
    Quiz.appendChild(question)

    let GoodFeedBack = document.createElement("div")
    GoodFeedBack.classList.add("GoodFeedBack")
    GoodFeedBack.innerHTML = "Bravo, tu as trouvé la bonne réponse !"

    let BadFeedBack = document.createElement("div")
    BadFeedBack.classList.add("BadFeedBack")
    BadFeedBack.innerHTML = "Dommage, c'est la mauvaise réponse !"

    AffichageQuestion(question, NombreAleatoire)
    function CreateQuiz() {
        for(let i:number = 0; i < 4; i++){  // Magic number à effacer pour l'itération 4
            var reponse:any = document.createElement("div")
            reponse.classList.add("reponse")
            reponse.value = AffichageReponse(reponse, NombreAleatoire, i)
            reponse.id = "reponse" + i // output ==> reponse0 ou reponse1 ou reponse2 ou reponse3
                
            Quiz.appendChild(reponse)
                
            AffichageReponse(reponse, NombreAleatoire, i)

                reponse.addEventListener("click", function(){
                    if(clicked == false){
                        if(Reponses[NombreAleatoire][i] == GoodAwnser[NombreAleatoire]) {
                        
                            Quiz.appendChild(GoodFeedBack)
                            Scores()
                        }else{
                            Quiz.appendChild(BadFeedBack)
                        }
                        clicked = true
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
        if(NbQuestionsNature > 0) {
            var NbAleatoire:number = Math.floor(Math.random()*NbQuestionsNature)
        } else{
            NbAleatoire = -1
        }

        return NbAleatoire
    }

    // Affichage du score
    Quiz.appendChild(Score)
    Score.classList.add("Score")
    Score.innerHTML = score + " / " + questions.Nature.length

    // Affichage des Questions
    function AffichageQuestion(question:any, NombreAleatoire:any) {
        if(NombreAleatoire >= 0) {
            question.innerHTML = QuestionsNature[NombreAleatoire]
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
        QuestionsNature.splice(NombreAleatoire, 1)
        Reponses.splice(NombreAleatoire, 1)
        NbQuestionsNature -= 1
        console.log(QuestionsNature)
        GoodAwnser.splice(NombreAleatoire, 1)
    }

    // Fonction du score
    function Scores() {
        score += 1
        Score.innerHTML = score + " / " + questions.Nature.length
    }

    // Création de l'interface de fin du quiz
    function finQuiz() {
        let fin:HTMLElement = document.createElement("div")
        Quiz.appendChild(fin)
        fin.innerHTML = "C'est la fin du Quiz"
        fin.classList.add("FinQuiz")
        let retour:any = document.createElement("a")
        Quiz.appendChild(retour)
        retour.innerHTML = "<- Retour"
        retour.href = "/localhost:1234"

    }

    // Active la fonction AffichageAleatoire() et la fonction ArrayEmpty() lors du click sur le bouton Valider
    submit.onclick = function() {
        if(clicked == false){
            alert("Veuillez choisir une réponse")
        }else {
            // Redéfinission de la vérification si une question a été répondue ou non
        clicked = false
        // Appelle la fonction supprimant la question déjà apparue
        DelQuestion()
        // Redéfini les nombre aléatoire
        let NombreAleatoire:number = NbAleatoire()
        AffichageQuestion(question, NombreAleatoire)
        for(let i:number=0; i < 4; i++){
            let reponse = document.getElementById("reponse" + i)
            AffichageReponse(reponse, NombreAleatoire, i)
        }
        // Supprime les class "GoodAnswer" et  "BadAnswer" qui ajoutent un fond à la réponse cliquée
        if(Quiz.contains(GoodFeedBack)){
            Quiz.removeChild(GoodFeedBack)
        }else{
            Quiz.removeChild(BadFeedBack)
        }
        }
        
    }
})

// **********************************************************************************************************************************************************************

// Deuxième Quiz

// **********************************************************************************************************************************************************************

// Quand on choisit le Thème "Jeux"
Jeux.addEventListener("click", function(){
    // Suppression des thèmes pour afficher le quiz
    Quiz.removeChild(Film)
    Quiz.removeChild(Nature)
    Quiz.removeChild(Jeux)

    // Nombre de questions de chaque thèmes
    var NbQuestionsJeux:number = questions.JeuxVidéos.length

    // Le nombre aléatoire mit dans une variable
    let NombreAleatoire = NbAleatoire()

    // Ajout des questions dans un tableau et des réponses dans un tableau
    var QuestionsJeux:string[] = []
    var Reponses:any[] = []
    var GoodAwnser:any[] = []
    // Ajout de tableaux dans le tableaux Reponses
    for(let i:number = 0; i < NbQuestionsJeux; i++) {
        Reponses.push([])
    }
    // Ajout des questions et de la bonne réponse
    for(let i:number = 0; i < NbQuestionsJeux; i++) {
        QuestionsJeux.push(questions.JeuxVidéos[i].Question)
        GoodAwnser.push(questions.JeuxVidéos[i].GoodAwnser)
    }
    // Ajout des reponses
    for(let i:number = 0; i < NbQuestionsJeux; i++) {
        for(let j = 0; j < 4; j++) {
            Reponses[i].push(questions.JeuxVidéos[i].Reponses[j])
        }
    }
    console.log("les questions sont" + QuestionsJeux)
    console.log(Reponses)



    // Création du quiz HTML

        
    // Création de la variable de la question
    let question:HTMLElement = document.createElement("div")
    question.id = "Question"
    // Création des variables de la question et des réponses
    Quiz.appendChild(question)

    let GoodFeedBack = document.createElement("div")
    GoodFeedBack.classList.add("GoodFeedBack")
    GoodFeedBack.innerHTML = "Bravo, tu as trouvé la bonne réponse !"

    let BadFeedBack = document.createElement("div")
    BadFeedBack.classList.add("BadFeedBack")
    BadFeedBack.innerHTML = "Dommage, c'est la mauvaise réponse !"

    AffichageQuestion(question, NombreAleatoire)
    function CreateQuiz() {
        for(let i:number = 0; i < 4; i++){  // Magic number à effacer pour l'itération 4
            var reponse:any = document.createElement("div")
            reponse.classList.add("reponse")
            reponse.value = AffichageReponse(reponse, NombreAleatoire, i)
            reponse.id = "reponse" + i // output ==> reponse0 ou reponse1 ou reponse2 ou reponse3
                
            Quiz.appendChild(reponse)
                
            AffichageReponse(reponse, NombreAleatoire, i)

                reponse.addEventListener("click", function(){
                    if(clicked == false){
                        if(Reponses[NombreAleatoire][i] == GoodAwnser[NombreAleatoire]) {
                        
                            Quiz.appendChild(GoodFeedBack)
                            Scores()
                        }else{
                            Quiz.appendChild(BadFeedBack)
                        }
                        clicked = true
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
        if(NbQuestionsJeux > 0) {
            var NbAleatoire:number = Math.floor(Math.random()*NbQuestionsJeux)
        } else{
            NbAleatoire = -1
        }

        return NbAleatoire
    }

    // Affichage du score
    Quiz.appendChild(Score)
    Score.classList.add("Score")
    Score.innerHTML = score + " / " + questions.JeuxVidéos.length

    // Affichage des Questions
    function AffichageQuestion(question:any, NombreAleatoire:any) {
        if(NombreAleatoire >= 0) {
            question.innerHTML = QuestionsJeux[NombreAleatoire]
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
        QuestionsJeux.splice(NombreAleatoire, 1)
        Reponses.splice(NombreAleatoire, 1)
        NbQuestionsJeux -= 1
        console.log(QuestionsJeux)
        GoodAwnser.splice(NombreAleatoire, 1)
    }

    // Fonction du score
    function Scores() {
        score += 1
        Score.innerHTML = score + " / " + questions.JeuxVidéos.length
    }

    // Création de l'interface de fin du quiz
    function finQuiz() {
        let fin:HTMLElement = document.createElement("div")
        Quiz.appendChild(fin)
        fin.innerHTML = "C'est la fin du Quiz"
        fin.classList.add("FinQuiz")
        let retour:any = document.createElement("a")
        Quiz.appendChild(retour)
        retour.innerHTML = "<- Retour"
        retour.href = "/localhost:1234"

    }

    // Active la fonction AffichageAleatoire() et la fonction ArrayEmpty() lors du click sur le bouton Valider
    submit.onclick = function() {
        if(clicked == false){
            alert("Veuillez choisir une réponse")
        }else {
            // Redéfinission de la vérification si une question a été répondue ou non
        clicked = false
        // Appelle la fonction supprimant la question déjà apparue
        DelQuestion()
        // Redéfini les nombre aléatoire
        let NombreAleatoire:number = NbAleatoire()
        AffichageQuestion(question, NombreAleatoire)
        for(let i:number=0; i < 4; i++){
            let reponse = document.getElementById("reponse" + i)
            AffichageReponse(reponse, NombreAleatoire, i)
        }
        // Supprime les class "GoodAnswer" et  "BadAnswer" qui ajoutent un fond à la réponse cliquée
        if(Quiz.contains(GoodFeedBack)){
            Quiz.removeChild(GoodFeedBack)
        }else{
            Quiz.removeChild(BadFeedBack)
        }
        }
        
    }
})
