import { ADD } from "../Lib/constants";


const baseURI = "http://192.168.99.100:4000/"

const habitsSubdomain = "habit/api/"
const statsSubdomain = "stats/api/"


export const getHabits = (uniqueId) => {
  const url = baseURI + habitsSubdomain + uniqueId
  return fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json())
    .then(responseJson => responseJson)
    .catch(error => ({ error }))
}


export const saveSchedule = (action) => {
  const {operation,id,value} = action
  const url = baseURI + statsSubdomain + id + '/schedule'
  const method = operation === ADD ? 'POST' : 'DELETE'

  const body = {scheduleDate : value}

  return fetch(url, {
    method: method,
    body:JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json())
    .then(responseJson => responseJson)
    .catch(error => ({ error }))
}


export const getStats = (habitId) => {
  const url = baseURI + statsSubdomain + habitId + '/stats'
  return fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json())
    .then(responseJson => responseJson)
    .catch(error => ({ error }))
}
  

export const saveHabitApi = (habit, uniqueId) => {
  const url = baseURI + habitsSubdomain
  habit["deviceId"] = uniqueId

  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(habit),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(response => response.json())
    .then(responseJson => responseJson)
    .catch(error => ({ error }))
}
