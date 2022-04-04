const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
}

export default class FetchRequest {
  baseUrl: string

  constructor(baseUrl = '/') {
    this.baseUrl = baseUrl
  }

  get = (url, options: {[key: string]: any} = {}) => {
    return this.request(this.baseUrl + url, {...options, method: METHODS.GET})
  }

  post = (url, options: {[key: string]: any} = {}) => {
    return this.request(this.baseUrl + url, {...options, method: METHODS.POST})
  }

  put = (url, options: {[key: string]: any} = {}) => {
    return this.request(this.baseUrl + url, {...options, method: METHODS.PUT})
  }

  delete = (url, options: {[key: string]: any} = {}) => {
    return this.request(this.baseUrl + url, {...options, method: METHODS.DELETE})
  }

  request = (url, options: {[key: string]: any} = {}, timeout = 5000) => {
    const {headers = {}, method, data} = options
    
    const payload = data ? JSON.stringify({...data}) : null
    return fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': 'true'
      },
      mode: 'cors',
      credentials: 'include',
      body: payload,
    })
  }
}
