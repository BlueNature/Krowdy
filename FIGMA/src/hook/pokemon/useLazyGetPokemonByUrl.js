import { useEffect, useState } from 'react'

export const useLazyGetPokemonByUrl = ({ url }) => {
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getPokemonByUrl = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()

        setPokemon(data)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    getPokemonByUrl()
  }, [url])

  return {
    pokemon,
    loading
  }
}