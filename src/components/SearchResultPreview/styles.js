import styled from 'styled-components'

export const Container = styled.div`
  background-color: #ffffff;
  box-shadow: 1px 7px 5px 1px rgb(0 0 0 / 28%);
  width: 98%;
  margin: 15px auto 0px;
  border-radius: 5px;
  position: absolute;
  top: 100%;
`

export const List = styled.ul`
  width: 100%;
  height: auto;
`

export const ListItem = styled.li`
  width: 100%;
`

export const ListItemLink = styled.a`
  display: block;
  width: 100%;
  padding: 15px 11px;
  border-color: transparent;
  border-style: solid;
  border-width: 1px 0px;

  &:hover {
    background-color: #ddedf3;
    border-color: #c9dfe7;
    cursor: pointer;
  }
`

export const HighLightText = styled.i`
  color: red;
  font-family: inherit;
  font-style: inherit;
  font-weight: inherit;
  color: #233a42;
  background: rgb(90 162 205 / 21%);
  padding: 1px 0px;
  border: 1px solid #cfdfe9;
  border-radius: 2px;
`
