// Este programa identifica a escola (A, B ou C), solicita as notas e diz se o aluno foi aprovado ou não, considerando as médias e condições de cada escola.

//Declaração de variáveis.

const escola = prompt("insira sua escola");
const n1 = parseFloat(prompt("insira a primeira nota (de 0 a 100)"));
const n2 = parseFloat(prompt("insira a segunda nota (de 0 a 100)"));
const n3 = parseFloat(prompt("insira a terceira nota (de 0 a 100)"));
const n4 = parseFloat(prompt("insira a quarta nota (de 0 a 100)"));

var media = (n1 + n2 + n3 + n4)/4;

//Determinando as condições de cada escola em função das variáveis previamente declaradas

if (escola === "A"){
     if (media >= 60){
    console.log ("APROVADO");
    } else {
    console.log ("REPROVADO");
}}

else if (escola === "B"){
    if (media >= 70){
    console.log ("APROVADO");
    } else {
    console.log ("REPROVADO");
}}

else if (escola === "C"){
    if (media >= 60 && n1 > 10 && n2 > 10 && n3 > 10 && n4 > 10){
    console.log("APROVADO");
    } else {
    console.log("REPROVADO");
 }} else {
    console.log("A escola não foi encontrada");
 }

