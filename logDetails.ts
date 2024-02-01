// type alias
type Uid = number | string

function logDetails(uid: Uid, item: string){
    console.log(`A product with ${uid} has a title as ${item}.`)
}

function logInfo(uid: Uid, user: string) {
    console.log(`A product with ${uid} has a title as ${user}.`)
}

type Plataform = 'Windowns' | 'Linux' | 'Mac Os'

function renderPlataform(plataform: Plataform){
    return plataform
}

renderPlataform("Mac Os")

logDetails(123, 'sapato')
logDetails("123", 'sapato')

logInfo(123, "Willian")
logInfo("123", "Willian")