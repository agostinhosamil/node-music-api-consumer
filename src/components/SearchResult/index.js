import { useState, Fragment } from 'react'

import { Container, MusicList, MusicListBody, Music, Name, Year } from './styles'
import { ViewMoreButton } from './ViewMoreButton'
import { LoadingProgress } from './LoadingProgress'
import { useFetch } from '@utils/useFetch'


// function range (low, max) {
//   const r = []
  
//   for (; low <= max; low++)
//     r.push (low)
  
//   return r
// }

export const SearchResult = ({ textQuery, ...props }) => {
  const [num, setNum] = useState (5)
  const [showLoading, setShowLoading] = useState (false)
  const { data: musicList, error } = useFetch (`musics/autocomplete/${textQuery}`)
  
  function handleViewMore () {
    setShowLoading (true)
    setTimeout (() => {
      setShowLoading (false)
      setNum (num + 5)
    }, 1500)
  }

  function handleSelectMusic (event, { music }) {
    event.preventDefault && event.preventDefault ()
    
    console.log ('Music Name => ', music.name, music.description)

    if (typeof props.onClick  === 'function') {
      props.onClick.apply (this, [music])
    }
  }
  
  if (!(typeof textQuery === typeof 'str' && textQuery)) {
    return <Fragment />
  }

  return !(musicList && !error) ? <Fragment /> : (
    <Container>
      <MusicList>
        <MusicListBody>
          {musicList.map (music => (
            <Music 
              key={music.id} 
              href="#"
              onClick={event => handleSelectMusic(event, { music })}
              dataMusic={music}>
              <Name>
                <span>{music.name}</span>
              </Name>
              <Year>{music.year}</Year>
            </Music>
          ))}
        </MusicListBody>
      </MusicList>
      <LoadingProgress show={showLoading} />
      <ViewMoreButton onClick={handleViewMore} />
    </Container>
  )
}
