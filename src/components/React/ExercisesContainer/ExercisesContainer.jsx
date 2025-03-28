import './ExercisesContainerStyles.css';
import { ExerciseCard } from '../ExerciseCard/ExerciseCard.tsx';
import { useEffect, useState } from "react"


export const ExercisesContainer = ({ exercisesArray }) => {

  const [exercisesViews, setExercisesViews] = useState([...exercisesArray]);
  const [exercisesFilterBtns, setExercisesFilterBtns] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const filterExercises = (palabraFiltro, arrayToWork) => {
    const regex = /[\u0300-\u036f]/g;
    const array = arrayToWork.filter((ex) => {
      const { title, description, difficult, reference } = ex.data;

      const dataDescription = `${title}, ${description}, ${difficult}, ${reference}`.trim();
      const dataDescriptionSinMayusculas = `${title}, ${description}, ${difficult}, ${reference}`.toLowerCase().trim();
      const dataDescriptionSinTilde = dataDescription.normalize("NFD").replace(regex, "");


      if (
        dataDescription.includes(palabraFiltro) || 
        dataDescriptionSinMayusculas.includes(palabraFiltro) || 
        dataDescriptionSinTilde.includes(palabraFiltro)
      ) {
        return ex;
      } 
      
    })

    return array;
  }

  useEffect(() => {
    
    if (!searchInput && exercisesFilterBtns.length > 0) return setExercisesViews(exercisesFilterBtns);

    if (!searchInput ) return setExercisesViews([...exercisesArray]);

  }, [searchInput, exercisesFilterBtns])

  const handleInput = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    
    
    if (exercisesFilterBtns.length > 0) {
      // console.log("filtrados por botones", filterExercises(value, exercisesFilterBtns));
      // console.log("se verifica el array botones", exercisesFilterBtns);
      return setExercisesViews(filterExercises(value, exercisesFilterBtns))
    };

    if (exercisesViews.length > 0) {
      // console.log("filtrados desde el principal", filterExercises(value, [...exercisesArray]));
      // console.log("se verifica el array principal", [...exercisesArray]);
      return setExercisesViews(filterExercises(value, [...exercisesArray]))
    };

    // console.log("filtrados al final de la función", filterExercises(value, [...exercisesArray]));
    setExercisesViews(filterExercises(value, [...exercisesArray]));
  }

  const handleClick = (e) => {
    const value = e.target.getAttribute("data-value");
    if (value === "Todos") {
      setExercisesFilterBtns([]);
      return setExercisesViews([...exercisesArray]);
    } 
    
    const filterArrayNivel = filterExercises(value, [...exercisesArray]);
    setExercisesFilterBtns(filterArrayNivel);
    setExercisesViews(filterArrayNivel);
  }
  

  return (
    <section id="section-exercises">
      <div className="header-section">
        <h1>Ejercicios</h1>
        <div className="search-container">
          <input 
            className="search-input d-inline-flex focus-ring focus-ring-secondary py-1 px-2 text-decoration-none border rounded-2" 
            type="search" 
            placeholder="Buscar ejercicio" 
            value={searchInput}
            onInput={handleInput}
          />
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle focus-ring focus-ring-secondary text-decoration-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Nivel
            </button>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item" onClick={handleClick} data-value="Todos" >Todos</button></li>
              <li><button className="dropdown-item" onClick={handleClick} data-value="Fácil" >Fácil</button></li>
              <li><button className="dropdown-item" onClick={handleClick} data-value="Medio" >Medio</button></li>
              <li><button className="dropdown-item" onClick={handleClick} data-value="Difícil" >Difícil</button></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="exercises-container">
        {
          exercisesViews.map(({ slug, data }, index) => (
            <ExerciseCard 
              key={index}
              url={slug}
              title={data.title}
              description={data.description}
              difficult={data.difficult}
              reference={data.reference}
            />
          ))
        }
      </div>
      
    </section>
  )
}