import React from 'react'
import { projectFireStore } from './firebase/config'
import {useState, useEffect} from "react"

const App = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    projectFireStore.collection("movies").get().then((snapshot) => {
      if(snapshot.empty){
        setError("Žádné filmy k vypsání")
      }else{
        let result = []
        snapshot.docs.forEach((oneMovie) => {
          result.push( {id: oneMovie.id, ...oneMovie.data()} )
        })
        setData(result)
      }
    }).catch((err) => {
      setError(err.message)
    })
  }, [])
  

  return (
    <div>
      {error && <p>{error}</p>}
      <h1>Firebase</h1>
      {
        data.map((oneMovie) => {
          return <article key={oneMovie.id}>
            <h2>{oneMovie.title}</h2>
            <p>Minimální věk: {oneMovie.minage}</p>
            <p>Délka: {oneMovie.time} minut</p>
          </article>
        })
      }
    </div>
  )
}

export default App