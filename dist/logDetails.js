"use strict";
function logDetails(uid, item) {
    console.log(`A product with ${uid} has a title as ${item}.`);
}
function logInfo(uid, user) {
    console.log(`A product with ${uid} has a title as ${user}.`);
}
function renderPlataform(plataform) {
    return plataform;
}
renderPlataform("Mac Os");
logDetails(123, 'sapato');
logDetails("123", 'sapato');
logInfo(123, "Willian");
logInfo("123", "Willian");
