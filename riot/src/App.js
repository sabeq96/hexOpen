import React, { Component } from 'react';
//Components
import DataTable from './components/DataTable'
import Chest from './components/Chest'
import DropBag from './components/DropBag'
import Icon from './components/Icon'
import Footer from './components/Footer'
//Styles
import './style.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      avatarList: []
    }
    this.handleChampionRoll = this.handleChampionRoll.bind(this)
  }

  handleChampionRoll(avatar){
    const { avatarList } = this.state
    avatarList.push(<Icon key={avatarList.length} imageUrl={avatar} />)
    console.log(avatarList)
    this.forceUpdate()
  }

  render() {
    return (
      <div className="App">
        <DataTable boxOpened={this.state.avatarList.length}/>
        <Chest onRoll={this.handleChampionRoll} />
        <DropBag>
          {this.state.avatarList}
        </DropBag>
        <Footer />
      </div>
    );
  }
}

export default App;
