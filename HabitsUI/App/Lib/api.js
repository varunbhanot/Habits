const people = [
  {
    "name": "Running",
    "id": "1",
    "question": "",
    "last_five": [
      1,
      0,
      1,
      1,
      1
    ]
  },
    { name: 'No Smoking', id:'2',question:'',"last_five": [
      1,
      1,
      1,
      1,
      0
    ] },
    { name: 'Code', id:'3',question:'',"last_five": [
      1,
      0,
      1,
      1,
      0
    ] },
  ]
  
  export default () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(people)
      }, 1000)
    })
  }


  const people_2 = [
    {
      "name": "Running",
      "id": "1",
      "question": "",
      "last_five": [
        0,
        0,
        1,
        1,
        1
      ]
    },
      { name: 'No Smoking', id:'2',question:'',"last_five": [
        1,
        1,
        1,
        1,
        0
      ] },
      { name: 'Code', id:'3',question:'',"last_five": [
        1,
        0,
        1,
        1,
        0
      ] },
    ]
  

    export const getPeople2 =  () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          return resolve(people_2)
        }, 1000)
      })
    }