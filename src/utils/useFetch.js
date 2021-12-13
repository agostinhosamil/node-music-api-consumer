import useSWR from 'swr'
import { API_URL } from '~/src/config'

export const useFetch = (path) => {

  path = path.trim ().replace (/^\/+/, '')

  const url = `${API_URL}/${path}`

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
