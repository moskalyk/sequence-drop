import React from 'react';
import logo from './logo.svg';
import './App.css';
import topRightSrc from './red.png'

import {CheckmarkIcon, Box, IconButton, useTheme, SunIcon, ChevronRightIcon, ChevronLeftIcon} from '@0xsequence/design-system'

import image0 from './imgs/0.png'
import image1 from './imgs/1.png'
import image2 from './imgs/2.png'
import image3 from './imgs/3.png'

function App() {

  const {theme, setTheme} = useTheme()

  const [red, setRed] = React.useState(true)
  const [yellow, setYellow] = React.useState(true)
  const [green, setGreen] = React.useState(true)
  const [blue, setBlue] = React.useState(true)
  const [left, setLeft] = React.useState(false)
  const [hoverImage, setHoverImage] = React.useState('')

  const [redClaimed, setRedClaimed] = React.useState(false);
  const [yellowClaimed, setYellowClaimed] = React.useState(false);
  const [greenClaimed, setGreenClaimed] = React.useState(false);
  const [blueClaimed, setBlueClaimed] = React.useState(false);

  const advance = () => {
    console.log('advancing')
  }

  const before = () => {
    console.log('before')
  }

  return (
    <div className="App">
      <Box gap='6'>
        <IconButton style={{position: 'fixed', top: '20px', right: '20px'}} icon={SunIcon} onClick={() => {
          setTheme(theme == 'dark' ? 'light' : 'dark')
        }}/>
      </Box>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="container">
        <div className="grid-container">
          <div className="red square" 
            onMouseLeave={() => {
              setHoverImage('')
              setRed(false)
              setLeft(false)
            }} 
            onMouseEnter={()=> {
              setHoverImage(image0)
              setRed(true)
              setLeft(true)
            }}
            >
            { redClaimed ? <div className="grid-text"><CheckmarkIcon size={'xl'}/></div> : null }
            <div className={`image-wrapper ${redClaimed ? 'claimed' : null}`}>
              <img src={image0} alt="your image description"/>
            </div>
          </div>
          <div className="blue square" onMouseLeave={() => {
              setHoverImage('')
              setLeft(false)
            }} 
            onMouseEnter={()=> {
              setHoverImage(image1)
              setLeft(false)
            }}>
            { blueClaimed ? <div className="grid-text"><CheckmarkIcon size={'xl'}/></div> : null }
            <div className={`image-wrapper ${blueClaimed ? 'claimed' : null}`}>
              <img src={image1} alt="your image description"/>
            </div>
          </div>
          <div className="yellow square" onMouseLeave={() => {
              setHoverImage('')
              setLeft(false)
            }} 
            onMouseEnter={()=> {
              setHoverImage(image2)
              setLeft(true)
            }}>
            { yellowClaimed ? <div className="grid-text"><CheckmarkIcon size={'xl'}/></div> : null }
            <div className={`image-wrapper ${yellowClaimed ? 'claimed' : null}`}>
              <img src={image2} alt="your image description"/>
            </div>
          </div> 
           <div className="green square" onMouseLeave={() => {
              setHoverImage('')
            }} 
            onMouseEnter={()=> {
              setHoverImage(image3)
            }}>
            { greenClaimed ? <div className="grid-text"><CheckmarkIcon size={'xl'}/></div> : null }
            <div className={`image-wrapper ${greenClaimed ? 'claimed' : null}`}>
              <img src={image3} alt="your image description"/>
            </div>
          </div>
        </div>
        {(hoverImage && (red || yellow) && (left))? <img className='display-left' src={hoverImage} /> : (hoverImage && (red || yellow) && (!left)) ? <img className='display-right' src={hoverImage} />: null }
      </div>
      <div className='spacer'>
      </div>
      <div className="keypad">
        <div className="keypad__inner">
          <div className="keypad__title">Sequence Drop</div><br/>
          <div className="keypad__subtitle">NFT Entertaiment system</div>
          <div className="central-button-container select">
            <div className="central-button"></div>
            <br/>
            <p>Details</p>
          </div>
          <div className="central-button-container start">
            <div className="central-button"></div>
            <br/>
            <p>&nbsp;&nbsp;Wallet</p>
          </div>
        </div>
        <div className="pad-left">
          <div className="cross-x" >
            <p className='float-child-left' onClick={() => before()}><ChevronLeftIcon size='xl'/></p>
            &nbsp;&nbsp;&nbsp;
            <p className='float-child' onClick={() => advance()}><ChevronRightIcon size='xl'/></p>
            </div>
          {/* <div className="cross-middle"></div> */}
        </div>
        <div className="pad-right">
          <div className="circular-button y-button" onClick={() => setGreenClaimed(true)}></div>
          <div className="circular-button b-button" onClick={() => setYellowClaimed(true)}></div>
          <div className="circular-button x-button" onClick={() => setBlueClaimed(true)}></div>
          <div className="circular-button a-button" onClick={() => setRedClaimed(true)}></div>
          <div className="ab-container circular-button-container"></div>
          <div className="xy-container circular-button-container"></div>
        </div>
        <div className="l-button top-button"></div>
        <div className="r-button top-button"></div>
        <div className="wire"></div>
      </div>
    </div>
  );
}

export default App;
