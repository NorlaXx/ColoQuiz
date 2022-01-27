"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const questions_json_1 = __importDefault(require("./questions.json"));
console.log(questions_json_1.default.Thème.Nature[0].Question);
console.log(questions_json_1.default.Thème.JeuxVidéos[1].GoodAwnser);
console.log(questions_json_1.default.Thème.Films[1].Reponses[1]);
