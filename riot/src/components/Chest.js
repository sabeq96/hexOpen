import React, { Component } from 'react'
import chest from '../images/img-chests.png'
import axios from 'axios'

class Chest extends Component {
    constructor(props){
        super(props)
        this.state = {
            championsID: [],
            skins: [],
            skinData: null,
            championData: null,
            image: null
        }

        this.lossSkins = this.lossSkins.bind(this)
    }

    componentDidMount(){
        //get Champions
        axios.get('http://localhost:3001/champions')
            .then(data=>data.data.champions)
            .then(fchamps=>this.setState({championsID: fchamps}))
            .catch(err=>console.log(err))
        //get Skins
        axios.get('http://localhost:3001/skins')
            .then(data=>data.data.data)
            .then(fskins=>this.setState({skins: fskins}))
            .catch(err=>console.log(err))
    }

    lossSkins(){
        var {championsID, skins} = this.state
        var lossChamp = Math.floor(Math.random() * championsID.length)
        var champSkins = skins[championsID[lossChamp].id].skins
        var lossSkin = Math.floor(Math.random() * (champSkins.length - 1))+1
        var skinData = champSkins[lossSkin]
        var championData = skins[championsID[lossChamp].id]
        var image = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/'+championData.key + '_' + skinData.num + '.jpg'
        this.setState({skinData: skinData, championData: championData, image: image})
        //Lift State UP
        this.props.onRoll(image)
    }

    displaySkin(){
        const {skinData, championData, image} = this.state
        if(skinData == null){
            return <img className="chestImage" src={chest} alt="mystery-chest" />
        }
        else{
            this.refs.skinName.innerHTML = skinData.name
            return <img className="chestImage" src={image} alt="mystery-chest" />
        }   
    }

    render() {
        return (
            <div className="chest">
                <div className="imageContent">
                    {this.displaySkin()}
                    <p ref='skinName' className='skinName'></p>
                </div>
                <button onClick={this.lossSkins}>Open chest</button>
            </div>
        );
    }
    }

export default Chest;
