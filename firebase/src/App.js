import React from "react";
import { projectFireStore } from "./firebase/config";
import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const unsubscribe = projectFireStore.collection("movies").onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError("Žádné filmy k vypsání");
          setData([]);
        } else {
          let result = [];
          snapshot.docs.forEach((oneMovie) => {
            result.push({ id: oneMovie.id, ...oneMovie.data() });
          });
          setData(result);
          setError(false);
        }
      },
      (err) => {
        setError(err.message);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  const deleteMovie = (id) => {
    projectFireStore.collection("movies").doc(id).delete();
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    const newMovie = {
      title: e.target.formTitle.value,
      minage: e.target.formAge.value,
      time: e.target.formTime.value,
    };
    try {
      await projectFireStore.collection("movies").add(newMovie);
      e.target.formTitle.value = "";
      e.target.formAge.value = "";
      e.target.formTime.value = "";
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="all-movies">
      {error && <p>{error}</p>}
      <form className="form" onSubmit={formSubmit}>
        <input
          className="input"
          type="text"
          name="formTitle"
          id="formTitle"
          placeholder="Název filmu"
        />
        <input
          type="number"
          className="input"
          name="formAge"
          id="formAge"
          placeholder="Minimální věk"
          min="0"
        />
        <input
          type="number"
          className="input"
          name="formTime"
          id="formTime"
          placeholder="Délka filmu"
          min="0"
        />
        <input type="submit" value="Vložit nový film" />
      </form>
      {data.map((oneMovie) => {
        return (
          <article className="one-movie" key={oneMovie.id}>
            <h2>{oneMovie.title}</h2>
            <p>Minimální věk: {oneMovie.minage}</p>
            <p>Délka: {oneMovie.time} minut</p>
            <button onClick={() => deleteMovie(oneMovie.id)}>Smazat</button>
          </article>
        );
      })}
    </div>
  );
};

export default App;
