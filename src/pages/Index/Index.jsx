import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Character from '../../components/Character'

function Index() {
  const [state, setState] = useState({
    characters: [],
    isLoaded: false,
    next: ''
  })

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios({
        url: 'https://rickandmortyapi.com/api/character/',
      })

      setState({
        characters: data.results,
        isLoaded: true,
        next: data.info.next
      })
    }

    fetchData()
  }, [])

  const fetchMoreCharacters = async () => {
    try {
      const { data, status } = await axios({
        url: state.next
      })

      if(data && status === 200) {
        setState(
          {
            characters: state.characters.concat(data.results),
            isLoaded: true,
            next: data.info.next
          }
        )
      }
    } catch (error) {
      console.error(error)
    }
  }


  if(!state.isLoaded) {
    return (
      <div className="text-center text-white">
        <h1>Cargando data</h1>
      </div>
    );
  }
  else {
    return (
      <div>
        <ul className="row">
          {
            state.characters.map((character) => (
              <li className="col-12 col-sm-6 col-md-4 col-lg-3 mb-2" key={character.id}>
                <Character character={character} />
              </li>
            ))
          }
        </ul>

        {
          state.next !== "" && (
            <div className="row">
              <div className="col-12 mb-3">
                <button onClick={fetchMoreCharacters} className="btn btn-primary btn-block">
                  Load more ...
                </button>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

export default Index;
