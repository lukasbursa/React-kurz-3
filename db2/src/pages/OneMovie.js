import React from "react";
import { useParams, Link } from "react-router-dom";
import { dbFirestore } from "../firebase/config";
import { useState, useEffect } from "react";
import "./OneMovie.css"

const OneMovie = () => {
  const { movieId } = useParams();
  const [data, setData] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    dbFirestore
      .collection("movies")
      .doc(movieId)
      .get()
      .then((document) => {
        if (document.exists) {
          setData(document.data());
        } else {
          setError("Film neexistuje");
        }
      })
      .catch((err) => setError(err.message));
  }, [movieId]);

  return <section className="one-movie-section">
    {error && <p>{error}</p>}
    <h1>{data.title}</h1>
    <p>Minimální věk: {data.minage}</p>
    <p>Délka filmu: {data.time}</p>
    <Link to="/movies">Zpět na seznam filmů</Link>
  </section>;
};

export default OneMovie;
