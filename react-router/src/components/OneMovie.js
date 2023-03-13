import React from 'react'
import { useParams, Link } from 'react-router-dom'
import data from "../data"
import "./OneMovie.css"

const OneMovie = () => {
    const {movieId} = useParams()

    const selectedMovie = data.find((oneMovie) => {
        return oneMovie.id === parseInt(movieId)
    })
    const {image, title, age, tags, description} = selectedMovie

  return (
    <section className='one-movie-more'>
        <h1>{title}</h1>
        <img src={image} alt={title} />
        <p>{age}</p>
        <p>{tags}</p>
        <p>{description}</p>
        <Link to="/movies">Zpět na výpis filmů</Link>
    </section>
  )
}

export default OneMovie