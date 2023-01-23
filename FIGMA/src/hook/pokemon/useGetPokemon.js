import { useEffect, useState } from 'react'

const endpoint = 'https://pokeapi.co/api/v2/pokemon'

const getIdByUrl = (url) => {
  const id = url.replace(endpoint, '').replace(/\//g, '')
  return id.padStart(3, '0')
}

export const useGetPokemon = () => {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const response = await fetch(endpoint)
        const { results } = await response.json()

        setPokemons(results.map((item) => {
          const id = getIdByUrl(item.url)
          const photo = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`

          return { ...item, id, photo }
        }))
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    getPokemons()

  }, [])


  return {
    pokemons,
    loading
  }
}
