import './ExerciseCardStyles.css';

interface Exercise {
  url: string
  title: string
  description: string
  difficult: "Fácil" | "Medio" | "Difícil"
  reference?: string
}

export const ExerciseCard = ({ url, title, description, difficult, reference }: Exercise) => {
  return (
    <a 
      href={`ejercicios/${url}`}
      className="exercise-link"
      data-description={`${title}, ${description}, ${difficult}, ${reference}`} 
      >
      <div className="exercise-card">
        <div>
          <h3 className="title-exercise">{title}</h3>
          <p>{description}</p>
        </div>

        <p>Dificultad: <strong>{difficult}</strong></p>

        {
          reference ? (<p>Referencia: <strong>{reference}</strong></p>) : ""
        }
        
      </div>
    </a>
  )
}