import { Fragment } from 'react'

import { Container, List, ListItem, ListItemLink } from "./styles"
import { useFetch } from '@utils/useFetch'

import { HighlightQuery } from './HighlightQuery'

export const SearchResultPreview = ({ query, show, ...props }) => {
  
  if (!(typeof 'str' === typeof query && query) || !show) {
    return <Fragment />
  }

  const { data: musicPreviewList, error } = useFetch(`musics/autocomplete/${query}`)

  if (error || !musicPreviewList || 
    !(musicPreviewList instanceof Array && 
      musicPreviewList.length >= 1)) {
    return <Fragment />
  }

  function handleListItemClick (event) {
    event.preventDefault ()

    const data = event.target.innerText

    console.log ('YES => ', data)

    if (typeof props.onSelect === 'function') {
      props.onSelect.apply (this, [{ text: data }])
    }
  }
  // const itemList = 'H'.repeat(8).split ('')

  // console.log (data)

  return (
    <Container>
      <List>
        {musicPreviewList.map ((music) => (
          <ListItem key={music.id}>
            <ListItemLink onClick={handleListItemClick}>
              <HighlightQuery 
                musicName={music.name}
                query={query} 
                />
            </ListItemLink>
          </ListItem>
        ))}
      </List>
    </Container>
  )
}
