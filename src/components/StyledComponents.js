import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const NotpadContainer = styled.div`
  display: flex;
  background-color: black;
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`
export const TextAreaAndIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-width: 1px;
  border-color: white;
  border-radius: 5px;
  padding: 20px;
`
export const IconContainer = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 30px;
  color: #f1f5f9;
`

export const Button = styled.button`
  background-color: transparent;
  color: ${props => (props.colorChange ? '#faff00' : '#f1f5f9')};
  :hover {
    cursor: pointer;
  }
`

export const TextAreaContainer = styled.textarea`
  background-color: black;
  color: white;
  font-family: 'Roboto';
  font-size: 20px;
  width: 300px;
  height: 400px;
  margin: 20px;
  padding: 10px;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.underline ? 'underline' : 'normal')};
`
