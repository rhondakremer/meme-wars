import React, {Component} from 'react';
import "./style.css"






class MemeCard2 extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            currentUser: "",
            imagebase64:""
        }
    }
    // componentDidUpdate()
    // {
    //     this.openImage(this.props.src)
    // }
    // _imageEncode (arrayBuffer) {
    //     let u8 = new Uint8Array(arrayBuffer)
    //     let b64encoded = btoa([].reduce.call(new Uint8Array(arrayBuffer),function(p,c){return p+String.fromCharCode(c)},''))
    //     let mimetype="image/jpeg"
    //     return "data:"+mimetype+";base64,"+b64encoded
    // }
    
    // openImage = (image) => {
    //     Api.downloadImage(image).then(imageData=>{
    //         this.setState(prevState => ({
    //             imagebase64: this._imageEncode(imageData.data),
    //         }));
    //     })
    // }

    // getStateObj = (e, type) => {
    //     let rect =
    //         this.imageRef.getBoundingClientRect();
    //     const xOffset = e.clientX - rect.left;
    //     const yOffset = e.clientY - rect.top;
    //     let stateObj = {};
    //     if (type === "bottom") {
    //         stateObj = {
    //             isBottomDragging: true,
    //             isTopDragging: false,
    //             bottomX: `${xOffset}px`,
    //             bottomY: `${yOffset}px`
    //         }
    //     } else if (type === "top") {
    //         stateObj = {
    //             isTopDragging: true,
    //             isBottomDragging: false,
    //             topX: `${xOffset}px`,
    //             topY: `${yOffset}px`
    //         }
    //     }
    //     return stateObj;
    // }


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

export default MemeCard2;