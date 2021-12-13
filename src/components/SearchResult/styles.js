import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  margin: 60px auto 200px;
`

export const MusicList = styled.div`
  width: 100%;
  border-radius: 4px;
  background-color: #ffffff;
`
export const MusicListBody = styled.div``
export const Music = styled.a`
  padding: 21px 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #e7e7e7;
  
  &:hover {
    background: #c9dfe7;
    cursor: pointer;
  }
`
export const Name = styled.div`
  width: 100%;
  display: inline-block;

  span {
    display: inline-block;
    font-family: "Arial";
    font-weight: bold;
    color: #333333;
    font-size: 28px;
  }
`
export const Year = styled.div`
  display: inline-block;
  color: #c0c0c0;
`

export const ViewMoreButtonContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  padding: 40px .0px;
`

export const ViewMoreButtonElement = styled.button`
  border: 0px;
  outline: 0px;
  background: #4a90e2;
  color: #ffffff;
  font-weight: bold;
  padding: 14px 43px;
  border-radius: 73px;
  border: 1px solid transparent;

  &:hover {
    background-color: #2f69ad;
    cursor: pointer;
  }

  &:active {
    background-color: #dcdcdc;
    border: 1px solid #2f69ad;
    color: #2f69ad;
  }
`

export const LoadingProgressContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 25px .0px;
`

export const LoadingProgressElement = styled.img``
