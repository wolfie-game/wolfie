export default class GameAPI {
  getLeaders() {
    return new Promise((resolve, reject) => {
      resolve(testApiLeaders)
    })
  }
}

const testApiLeaders = [
  {
    id: 1,
    user: 'Player 1',
    score: '10000',
  },
  {
    id: 2,
    user: 'Player 2',
    score: '130000',
  },
  {
    id: 3,
    user: 'Player 3',
    score: '15000',
  },
]
