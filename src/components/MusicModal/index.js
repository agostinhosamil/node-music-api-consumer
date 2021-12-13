import { Container, Modal, ModalTitle, ModalDescription, ModalCloseButton, Text } from "./styles"
import { Fragment } from "react"

export const MusicModal = ({ show = false, music, ...props }) => {

  function handleClose () {
    // ...
    if (typeof props.onClose === 'function') {
      props.onClose.apply (this, [])
    }
  }

  return !(typeof show === typeof true && show) || !music ? <Fragment /> : (
    <Container>
      <Modal>
        <ModalCloseButton 
          onClick={handleClose}
          />
        <Text weight={900} size={18}>
          {props.query || '(query)'}
        </Text>
        <ModalTitle>
          {music.name}
        </ModalTitle>
        <Text>{music.year}</Text>
        <ModalDescription>
          {music.description}
        </ModalDescription>
      </Modal>
    </Container>
  )
}
