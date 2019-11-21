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
            currentUser: "",
            imagebase64:""
        }
    }


    render()
    {
        // this.openImage(this.props.src)

        const textStyle = {
            fontFamily: "Impact",
            fontSize: "50px",
            textTransform: "uppercase",
            fill: "#FFF",
            stroke: "#000",
            userSelect: "none"
        }

        return (<div>
        <div id="svg_ref">
            <div className="memeCard2Image" style ={ { backgroundImage: "url("+this.props.src+")" } }>
                <svg >
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
            </div>

        </div>
           
            </div>);
    }
}


    export default PendingWars

