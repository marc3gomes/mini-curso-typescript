// accountInfo
// charInfo
// PlayerInfo

type AccountInfo = {
    id: number;
    name: string;
    email?: string;
}

const account: AccountInfo = {
    id: 123,
    name: 'Marcelo',
    email: 'willianjusten@gmail.com'
}

type CharInfo = {
    nickname: string;
    level: number;
}

const char: CharInfo = {
    nickname: 'marc',
    level: 100
}

// intersection
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
    id: 123,
    name: 'Marcelo',
    nickname: 'marc',
    level: 100
}