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
  const [genre, setGenre] = useState(arrayFilm)
  return (
    <>
      <form>
        <label for="genere">Scegli il genere:</label>
        <select name="genere">
          <option value="genre"></option>
        </select>
      </form>
    </>
  )
}

export default App
