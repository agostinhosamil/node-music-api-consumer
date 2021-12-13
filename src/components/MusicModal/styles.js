import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .78);
  position: fixed;
  top: 0px;
  left: 0px;
`

export const Modal = styled.div`
  width: 96%;
  max-width: 550px;
  background-color: #ffffff;
  border: 1px solid #dcdcdc;
  position: absolute;
  padding: 15px;
  left: 0px;
  right: 0px;
  top: 90px;
  margin: auto;
  border-radius: 4px;
`

export const ModalBody = styled.div`
  width: 100%;
  height: auto;
  padding: 2px;
`

export const ModalTitle = styled.h2`
  font-size: 43px;
  letter-spacing: -2px;
  font-weight: 100;
`

export const ModalDescription = styled.p`
  padding: 18px .0px .0px;
  display: block;
  font-size: 24px;
  letter-spacing: 1px;
  line-height: 31px;
  color: #121111;
`

export const ModalCloseButton = styled.img.attrs(() => ({src: '/cross.png', width: 19}))`
  position: absolute;
  cursor: pointer;
  top: 15px;
  right: 15px;
`

export const Text = styled.span`
  color: #999696;
  font-size: ${props => props.size || 13}px;
  font-weight: ${props => props.weight || 300};
  text-transform: uppercase;
`
