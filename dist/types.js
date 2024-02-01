"use strict";
// bolean (true / false)
let isOpen;
isOpen = true;
// string ('foo', "foo", `foo`)
let message;
message = `foo ${isOpen}`;
// number (int, float, hex, binary)
let total;
total = 20;
// array (type[])
let items;
items = [1, 2, 3];
let values;
values = [1, 2, 3];
// tuple 
let title;
title = [1, 'foo'];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any (qualquer coisa) NÃO É LEGAL!
let coisa;
coisa = 'qualquer coisa';
// void (vazio)
function logger() {
    console.log('foo');
}
// never
function error() {
    throw new Error("error");
}
// object
let cart;
cart = {
    key: 'foo'
};
// Type Inference
let message2 = "mensagem definida";
message2 = "mensagem definida 2";
window.addEventListener('click', (e) => {
    console.log(e.target);
});
