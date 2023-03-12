import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  BgContainer,
  NotpadContainer,
  ImageContainer,
  TextAreaAndIconContainer,
  IconContainer,
  Button,
  TextAreaContainer,
} from './components/StyledComponents'
import './App.css'

// Replace your code here

class App extends Component {
  state = {boldColor: false, italicColor: false, underlineColor: false}

  BoldButtonColorChange = () => {
    this.setState(prevState => ({boldColor: !prevState.boldColor}))
  }

  ItalicButtonColorChange = () => {
    this.setState(prevState => ({italicColor: !prevState.italicColor}))
  }

  UnderlineButtonColorChange = () => {
    this.setState(prevState => ({underlineColor: !prevState.underlineColor}))
  }

  render() {
    const {boldColor, italicColor, underlineColor} = this.state
    console.log(boldColor, italicColor, underlineColor)
    return (
      <BgContainer>
        <NotpadContainer>
          <ImageContainer>
            <h1>Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageContainer>
          <TextAreaAndIconContainer>
            <IconContainer>
              <li key="bold">
                <Button
                  type="button"
                  data-testid="bold"
                  onClick={this.BoldButtonColorChange}
                  colorChange={boldColor}
                >
                  <VscBold size={25} />
                </Button>
              </li>
              <li key="italic">
                <Button
                  type="button"
                  data-testid="italic"
                  onClick={this.ItalicButtonColorChange}
                  colorChange={italicColor}
                >
                  <GoItalic size={25} />
                </Button>
              </li>
              <li key="underline">
                <Button
                  type="button"
                  data-testid="underline"
                  onClick={this.UnderlineButtonColorChange}
                  colorChange={underlineColor}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </li>
            </IconContainer>
            <TextAreaContainer
              type="text"
              bold={boldColor}
              italic={italicColor}
              underline={underlineColor}
            />
          </TextAreaAndIconContainer>
        </NotpadContainer>
      </BgContainer>
    )
  }
}

export default App
