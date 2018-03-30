
const baseURI = "http://192.168.99.100:4000/"

const habitsSubdomain = "habit/api/"

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
