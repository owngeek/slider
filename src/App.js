import React from 'react';
import logo from './logo.svg';
import './App.css';
import GalleryComponent  from"./component/GalleryComponent"
import images from"./component/MenuArray"
import NxtBtnComponent from"./component/NxtBtnComponent"
import PrvBtnComponent from"./component/PrvBtnComponent"
class App extends React.Component{
constructor(){
  super()
  this.state={
imageIndex:0
  }
  this.nxtBtn=this.nxtBtn.bind(this)
  this.prvBtn=this.prvBtn.bind(this)
  this.btnStart=this.btnStart.bind(this)
  this.btnEnd=this.btnEnd.bind(this)
}



nxtBtn(){
  if(this.state.imageIndex==images.length -1){
    
    return
  }
  this.setState({
    imageIndex:++this.state.imageIndex 
  })

}

prvBtn(){
  if(this.state.imageIndex==0){
    
    return
  }
  this.setState({
    imageIndex:--this.state.imageIndex 
  })
}
btnStart(){
  this.setState({
    imageIndex: 0
  })
}
btnEnd(){
  this.setState({
    imageIndex: images.length-1
  })
}
render(){

  return (
    <div>

<NxtBtnComponent nxtBtn={this.nxtBtn}/>
<PrvBtnComponent prvBtn={this.prvBtn}/>
<GalleryComponent myn={images[this.state.imageIndex]}/>

<button onClick={this.btnEnd}>Go to end</button>
<button onClick={this.btnStart}>Go to start</button>
    </div>
  )
}
}

export default App;
