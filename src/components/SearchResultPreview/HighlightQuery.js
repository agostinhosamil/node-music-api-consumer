import { Fragment } from 'react'

import { HighLightText } from './styles' 

export const HighlightQuery = ({musicName, query}) => {
  const queryRe = new RegExp (query.trim (), 'i')

  // const fMusicName = musicName.replace (queryRe, `<i>${query}</i>`)

  const splitMusicName = musicName.split (queryRe)
  const musicNameFirstSlice = splitMusicName [0]
  const musicNameRestSlice = splitMusicName.slice (1, splitMusicName.length).join (query)

  const musicNameQueryMatch = musicName.match (queryRe)

  return (
    <Fragment>
      {musicNameFirstSlice}
      {musicNameQueryMatch && (
        <HighLightText>
          {musicNameQueryMatch [0]}
        </HighLightText>
      )}
      {musicNameRestSlice}
    </Fragment>
  )
}
