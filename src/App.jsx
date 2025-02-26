import { useState, useEffect } from 'react'

const arrayFilm = [
  { id: 1, title: 'Inception', genre: 'Fantascienza' },
  { id: 2, title: 'Il Padrino', genre: 'Thriller' },
  { id: 3, title: 'Titanic', genre: 'Romantico' },
  { id: 4, title: 'Batman', genre: 'Azione' },
  { id: 5, title: 'Interstellar', genre: 'Fantascienza' },
  { id: 6, title: 'Pulp Fiction', genre: 'Thriller' }
]

function App() {

  const [filteredGenre, setFilteredGenre] = useState(arrayFilm);
  const [genre, setGenre] = useState("");

  useEffect(() => {
    if (genre !== "") {
      const filtro = arrayFilm.filter(movie => movie.genre === genre)
      setFilteredGenre(filtro)
    } else {
      setFilteredGenre(arrayFilm)
    }
  }, [genre])

  return (
    <>

      <div className='container'>
        <div className="form-floating mt-3 mb-4">
          <select value={genre} name='' onChange={(e) => setGenre(e.target.value)} className="form-select">
            <option value="">Tutti i generi</option>
            <option value="Fantascienza">Fantascienza</option>
            <option value="Thriller">Thriller</option>
            <option value="Romantico">Romantico</option>
            <option value="Azione">Azione</option>
          </select>
        </div>
        <ul className='list-group'>
          {
            filteredGenre.map((element) => {
              return (
                <li key={element.id} className='list-group-item'>{element.title}-{element.genre}</li>
              )
            })
          }
        </ul>
      </div >

    </>
  )
}

export default App
