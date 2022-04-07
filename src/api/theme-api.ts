import FetchRequest from '../utils/FetchRequest'

enum THEMES {
  light = 'light',
  dark = 'dark',
}

export type ThemeParams = {
  theme: THEMES,
}

export type PostTheme = GetTheme & ThemeParams
const host = '/theme'
const themeAPIInstance = new FetchRequest(`${host}`)

class ThemeAPI {
  getTheme(ownerId: number): Promise<ThemeParams> {
    return themeAPIInstance
      .get(`?ownerId=${ownerId}`)
      .then((response) => {
        return response.json()
      })
      .catch(function (error) {
        alert(error)
      })
  }

  postTheme(data: PostTheme): Promise<void> {
    return themeAPIInstance
      .post('', {data: data})
      .then((response) => {
        return response.json()
      })
      .catch((reject) => {
        throw new Error(reject)
      })
  }

}

export default new ThemeAPI()
