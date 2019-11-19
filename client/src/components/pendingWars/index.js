import React, {Component} from 'react';
import Api from '../../utils/API';
import "./style.css"
import axios from "axios"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



class PendingWars extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            email:"",
            password: ""
        }
    }

    componentDidMount() {
        // Api.getUsers()
        //   .then(res => {
        //     let user = JSON.parse(localStorage.getItem('session'));
        //     this.setState({ currentUser: user.id }, () => 
            
        //     Api.getMyChallenges(this.state.currentUser)
        //     .then(res =>
        //       this.setState({battles:res.data}, () =>
        //       this.getBattleMemes())
        //     )
        //   )}); 


          
        //   Api.getBattles()
        //   .then( res => 
        //     this.setState({battles:res.data}, () => 
        //     this.getBattleMemes()
        //     ))
        //   }
      
      
        //   //this should be used with getPendingWarMemes below and getBattles() above to get the info to render the memes
        //   getBattleMemes() {
        //       let memeBattles = [];
        //       for (let i = 0; i < this.state.battles.length; i++) {
        //         memeBattles.push([this.state.battles[i].meme1, this.state.battles[i].meme2])
        //       } this.setState({memeBattles: memeBattles}, () => this.getPendingWarMemes())
        //   }
        //   // don't forget this one with the one above!!
        //   getPendingWarMemes() {
        //       let memeages = [];
        //       for (let i = 0; i < this.state.memeBattles.length; i++) {
        //           Api.getMemeById(this.state.memeBattles[i][0])
        //           .then(res => memeages.push(res.data))
        //           .then(this.setState({memeages:memeages}))
        //       }
          }



      _imageEncode (arrayBuffer) {
        let u8 = new Uint8Array(arrayBuffer)
        let b64encoded = btoa([].reduce.call(new Uint8Array(arrayBuffer),function(p,c){return p+String.fromCharCode(c)},''))
        let mimetype="image/jpeg"
        return "data:"+mimetype+";base64,"+b64encoded
    }
    
    openImage = (image) => {
        Api.downloadImage(image).then(imageData=>{
            this.setState(prevState => ({
                imagebase64: this._imageEncode(imageData.data),
            }));
        })
    }

    getStateObj = (e, type) => {
        let rect =
            this.imageRef.getBoundingClientRect();
        const xOffset = e.clientX - rect.left;
        const yOffset = e.clientY - rect.top;
        let stateObj = {};
        if (type === "bottom") {
            stateObj = {
                isBottomDragging: true,
                isTopDragging: false,
                bottomX: `${xOffset}px`,
                bottomY: `${yOffset}px`
            }
        } else if (type === "top") {
            stateObj = {
                isTopDragging: true,
                isBottomDragging: false,
                topX: `${xOffset}px`,
                topY: `${yOffset}px`
            }
        }
        return stateObj;
    }


    render()
    {
        const textStyle = {
            fontFamily: "Impact",
            fontSize: "50px",
            textTransform: "uppercase",
            fill: "#FFF",
            stroke: "#000",
            userSelect: "none"
        }

        return (<div>
        {this.openImage(this.props.src)}
        <svg
              width={600}
              id="svg_ref"
              height={400}
              ref={el => { this.svgRef = el }}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink">
              <image
              className="memeCard2Image"
                ref={el => { this.imageRef = el }}
                xlinkHref={this.state.imagebase64}
                
              />
              <text
                style={{ ...textStyle, zIndex: this.state.isTopDragging ? 4 : 1 }}
                x={this.props.topX}
                y={this.props.topY}
                dominantBaseline="middle"
                textAnchor="middle"

              >
                  {this.props.topText}
              </text>
              <text
                style={{ ...textStyle, zIndex: this.state.isTopDragging ? 4 : 1 }}
                dominantBaseline="middle"
                textAnchor="middle"
                x={this.props.bottomX}
                y={this.props.bottomY}
              >
                  {this.props.bottomText}
              </text>
            </svg>
            <Link to="/mememaker" className="nav-link btn btn-primary pinkButton" >Fight Back</Link>

            </div>);
    }
}


    export default PendingWars

