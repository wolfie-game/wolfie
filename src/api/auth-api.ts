const host = 'https://ya-praktikum.tech/api/v2/auth'

export default class AuthAPI {
  signup(data) {
    console.log('auth', JSON.stringify({data}))
    return fetch(host + '/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        first_name: 'User', //zaglushky
        second_name: 'User',
        phone: '+71111111111',
        ...data,
      }),
    }).catch((reject) => {
      throw new Error(reject)
    })
  }

  signin(data) {
    console.log('auth in', JSON.stringify({data}))

    return fetch(host + '/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({...data}),
    })
      .then(() => {
        const info = this.getUserInfo()
        console.log(info)
        return info

        //router.go('/messenger')
      })
      .catch((reject) => {
        throw new Error(reject)
      })
  }

  getUserInfo() {
    return fetch(host + '/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((response) => {
        return response.json()
      })
      .catch(function (error) {
        alert(error)
      })
  }

  userExit() {}
}
