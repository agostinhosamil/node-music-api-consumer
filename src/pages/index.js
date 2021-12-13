import { Fragment, useState } from 'react'

import { SearchInputContainer, SearchInput, SearchIcon, InputWrapper } from '@styles'
import { SearchResultPreview } from '@components/SearchResultPreview/index'
import { SearchResult } from '@components/SearchResult'
import { MusicModal } from '@components/MusicModal'
import { KeyCodes } from '@utils/keyCodes'

export default function Home () {
  const [query, setQuery] = useState ('')
  const [textQuery, setTextQuery] = useState ('')
  const [showResultPreview, setShowResultPreview] = useState (false)
  const [musicModal, setMusicModal] = useState ({})

  function handleInputKeyUp (event) {
    setShowResultPreview (true)
    setQuery (event.target.value)
  }

  function handleInputKeyDown (event) {
    if (event.ctrlKey && event.keyCode === KeyCodes.Enter) {
      const text = event.target.value?.trim ()

      handleSelectResult ({ text })
    }
  }

  function handleInputFocusChange () {
    setTimeout (() => setShowResultPreview (!showResultPreview), 100)
  }

  function handleSelectResult ({ text }) {
    setTextQuery (text)
  }

  function handleClickSearchResult (music) {
    setMusicModal ({ show: true, music })
  }

  function handleCloseModal () {
    setMusicModal ({ show: false,  music: null })
  }

  return (
    <Fragment>
      <SearchInputContainer>
        <SearchInput>
          <SearchIcon />
          <InputWrapper>
            <input 
              type="text" 
              autoCorrect="off" 
              autoComplete="off"
              spellCheck="false"
              onBlur={handleInputFocusChange}
              onFocus={handleInputFocusChange}
              onKeyUp={handleInputKeyUp}
              onKeyDown={handleInputKeyDown}
              />
          </InputWrapper>
        </SearchInput>
        <SearchResultPreview
          onSelect={handleSelectResult}
          show={showResultPreview} 
          query={query}
          />
      </SearchInputContainer>
      <SearchResult 
        textQuery={textQuery} 
        onClick={handleClickSearchResult}
        />
      <MusicModal
        onClose={handleCloseModal}
        query={query}
        music={musicModal.music} 
        show={musicModal.show} 
        />
    </Fragment>
  )
}
