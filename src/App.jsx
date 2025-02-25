import { useState, useEffect } from 'react'

const arrayFilm = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]

function App() {
  const [genre, setGenre] = useState("");
  const [filteredGenre, setFilteredGenre] = useState(arrayFilm)



  return (
    <>

      <div>
        <ul>
          {
            arrayFilm.map((element, index) => {
              return (
                <li key={index}>{element.title}</li>
              )
            })
          }
        </ul>
      </div>
      <form>
        <label>Scegli il genere:</label>
        <select>
          {
            filteredGenre.map((element, index) => {
              return (
                <option value={index}>{element.genre}</option>
              )
            })
          }
        </select>
      </form>
    </>
  )
}

export default App
