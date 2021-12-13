import { ViewMoreButtonContainer, ViewMoreButtonElement } from "./styles"

export const ViewMoreButton = ({ onClick }) => {
  function handleClick () {
    if (typeof onClick === 'function') {
      onClick.apply (this, arguments)
    }
  }

  return (
    <ViewMoreButtonContainer>
      <ViewMoreButtonElement 
        onClick={handleClick}>
        View More
      </ViewMoreButtonElement>
    </ViewMoreButtonContainer>
  )
}