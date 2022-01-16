const host = 'https://ya-praktikum.tech/api/v2/user'

export default class UserAPI {
  updatePassword(oldPassword, newPassword) {
    return fetch(host + '/password', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        oldPassword,
        newPassword,
      }),
    })
      .then((response) => {
        return response.json()
      })
      .catch((reject) => {
        throw new Error(reject)
      })
  }
}
