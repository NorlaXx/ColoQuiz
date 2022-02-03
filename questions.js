"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const questions_json_1 = __importDefault(require("./questions.json"));
// console.log(questions.Thème.Nature[0].Question)
// console.log(questions.Thème.JeuxVidéos[1].GoodAwnser)
// console.log(questions.Thème.Films[1].Reponses[1])
// Affichage de la question
let Question = document.getElementById("Question");
Question.innerHTML = questions_json_1.default.Films[0].Question;
let Réponse1 = document.getElementById("Réponse1");
Réponse1.innerHTML = questions_json_1.default.Films[0].Reponses[0];
let Réponse2 = document.getElementById("Réponse2");
Réponse2.innerHTML = questions_json_1.default.Films[0].Reponses[1];
let Réponse3 = document.getElementById("Réponse3");
Réponse3.innerHTML = questions_json_1.default.Films[0].Reponses[2];
let Réponse4 = document.getElementById("Réponse4");
Réponse4.innerHTML = questions_json_1.default.Films[0].Reponses[3];
