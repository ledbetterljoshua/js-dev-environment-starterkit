import 'whatwg-fetch'
import getBaseUrl from './baseUrl'

const baseUrl = getBaseUrl()

export function getUsers() {
  return get('users')
}

export function deleteUser(id) {
  return del(`users/${id}`)
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError)
}

function del(url) {
  return fetch(baseUrl + url, {
    method: 'delete'
  }).then(onSuccess, onError)
}

function onSuccess(response) {
  return response.json()
}

function onError(error) {
  return error.json()
}
