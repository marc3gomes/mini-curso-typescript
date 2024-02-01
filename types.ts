// bolean (true / false)
let isOpen: boolean
isOpen = true

// string ('foo', "foo", `foo`)
let message: string
message = `foo ${isOpen}`

// number (int, float, hex, binary)
let total: number
total = 20

// array (type[])
let items: number[]
items = [1, 2, 3]

let values: Array<number>
values = [1, 2, 3]

// tuple 
let title: [number, string]
title = [1, 'foo']

// enum
enum Colors {
    white = '#fff',
    black = '#000'
}

// any (qualquer coisa) NÃO É LEGAL!
let coisa: any
coisa = 'qualquer coisa'

// void (vazio)
function logger() {
    console.log('foo')
}

// null | undefined
type Bla = string | undefined

// never
function error(): never {
    throw new Error("error");
}

// object
let cart: object
cart = {
    key: 'foo'
}

// Type Inference
let message2 = "mensagem definida"
message2 = "mensagem definida 2"

window.addEventListener('click', (e) => {
    console.log(e.target)
})


