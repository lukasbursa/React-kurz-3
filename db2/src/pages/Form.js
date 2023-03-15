import React from "react";
import { dbFirestore } from "../firebase/config";
import { useState } from "react";
import "./Form.css"

const Form = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieMinage, setMovieMinage] = useState("");
  const [movieTime, setMovieTime] = useState("");
  const [error, setError] = useState("")

  const submitForm = async (e) => {
    e.preventDefault();

    const newMovie = {
      title: movieTitle,
      minage: parseInt(movieMinage),
      time: parseInt(movieTime),
    };

    try{
        await dbFirestore.collection("movies").add(newMovie)
        setMovieTitle("");
        setMovieMinage("");
        setMovieTime("");
    }catch (err) {
        setError(err.message)
    }
  };
  return (
    <section className="form-section">
        {error && <p>{error}</p>}
        <form onSubmit={submitForm}>
        <input
            type="text"
            className="input"
            placeholder="Název filmu"
            value={movieTitle}
            onChange={(e) => setMovieTitle(e.target.value)}
        />
        <input
            type="number"
            className="input"
            placeholder="Minimální věk"
            min="1"
            value={movieMinage}
            onChange={(e) => setMovieMinage(e.target.value)}
        />
        <input
            type="number"
            className="input"
            placeholder="Délka filmu"
            min="1"
            value={movieTime}
            onChange={(e) => setMovieTime(e.target.value)}
        />
        <input type="submit" value="Přidat film" />
        </form>
    </section>
  );
};

export default Form;
