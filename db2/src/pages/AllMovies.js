import React from 'react'
import { dbFirestore } from '../firebase/config'
import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import "./AllMovies.css"

const AllMovies = () => {
    //useEffect(() => document.title = props.title, [])
    const [data, setData] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        const unsubscribe = dbFirestore.collection("movies").onSnapshot((snapshot) => {

            if (snapshot.empty){
                setError("V databázi není žádný film")
            }else{
                let result = []
                snapshot.docs.forEach((oneDoc) => {
                    result.push({id: oneDoc.id, ...oneDoc.data()})
                })
                setData(result)
            }
        }, (err) => setError(err.message))
        return () => unsubscribe()
    }, [])

    const deleteMovie = (id) => {
        dbFirestore.collection("movies").doc(id).delete()
    }

  return (
    <section>
        {error && <p className='error'>{error}</p>}
        {
            data.map((oneMovie) => {
                return <article className='one-movie' key={oneMovie.id}>
                    <p>{oneMovie.title}</p>
                    <Link to={`/movies/${oneMovie.id}`}>Detail filmu</Link>
                    <button onClick={() => deleteMovie(oneMovie.id)}>Smazat</button>
                </article>
            })
        }
    </section>
  )
}

export default AllMovies