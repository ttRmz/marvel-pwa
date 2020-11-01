import { useGet } from 'restful-react'

export const useCharacters = (config = {}) => {
  const { data, ...rest } = useGet({
    path: '/characters',
    ...config,
  })

  return { characters: data?.data?.results, ...rest }
}

export const useCharacter = id => {
  const { data, ...rest } = useGet({
    path: `/characters/${id}`,
  })

  const [character] = data?.data?.results || []

  return { character, ...rest }
}
