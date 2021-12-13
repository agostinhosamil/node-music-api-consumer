import useSWR from 'swr'

export const useFetch = (path) => {

  path = path.trim ().replace (/^\/+/, '')

  const url = `http://localhost:3333/${path}`

  const { data, error } = useSWR (url, async () => {
    const response = await fetch (url)
    const data = await response.json ()

    return data
  })

  return {
    data, 
    error
  }
}
