import { useGet } from 'restful-react'

export const useCharacters = () => {
  const { data, ...rest } = useGet({
    path: '/characters',
  })

  return { characters: data?.data?.results, ...rest }
}

export const useCharacter = id => {
  const { data, ...rest } = useGet({
    path: `/characters/${id}`,
  })

  return { character: data, ...rest }
}
