import React from 'react'
import data from "../data"
import { Link } from 'react-router-dom'
import "./Movies.css"

const Movies = () => {
  return (
    <section className='all-movies'>
      {
        data.map((oneMovie) => {
          return <article className='one-movie' key={oneMovie.id}>
            
              <img src={oneMovie.image} alt={oneMovie.title} />
              <h2>{oneMovie.title}</h2>
              <Link to={ `/movies/${oneMovie.id}` }>Více informací</Link>
          </article>
        })
      }
    </section>
  )
}

export default Movies