import React, { Component } from 'react';
import UserProfile from '../../components/UserProfile';
import "./style.css";
import NavBar from '../../components/NavBar';
import { Modal, ModalHeader, ModalBody, FormGroup, Label} from 'reactstrap';
import Api from '../../utils/API';
import MemeCard2 from '../../components/MemeCard2';

const initialState = {
    toptext: "",
    bottomtext: "",
    isTopDragging: false,
    isBottomDragging: false,
    topY: "10%",
    topX: "50%",
    bottomX: "50%",
    bottomY: "90%"
}

class MemeMaker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: "",
            currentImage: null,
            modalIsOpen: false,
            currentImagebase64: null,
            ...initialState,
            baseImgURL: "",
            createdBy: null,
            imageOf: null,
            users: [],
            images: []
        }
    }

    componentDidMount() {
        Api.getUsers()
        .then(res => {
            let user = JSON.parse(localStorage.getItem('session'));
            this.setState({currentUser: user.id, createdBy: user.id, images:res.data,currentImage:res.data.length>0?res.data[0]:null})
        }); 
      }

    //   componentDidMount() {
       
    //   }

      getUserImg() {
        let images = [];
        for (let i = 0; i < this.state.users.length; i++) {
          images.push(this.state.users[i].image)
        } this.setState({images: images}, () => console.log(this.state))
      }

    saveMeme= () => {
        Api
            .saveMeme(this.state.baseImgURL, this.state.toptext, this.state.topY, this.state.topX, this.state.bottomtext, this.state.bottomY, this.state.bottomX, this.state.createdBy, this.state.imageOf)
            .then(memeSaved => {
        Api.
            startBattle(memeSaved.data._id, memeSaved.data.createdBy, memeSaved.data.imageOf)
            .then(newBattleInitiated => console.log("we did a thing", newBattleInitiated))
                // debugger;
                console.log("HOW DOES THIS LOOK?", JSON.stringify(memeSaved.data._id));
                alert("Yay! Your meme has been added")
                this.setState({modalIsOpen: false})
        })
    }
    
    _imageEncode (arrayBuffer) {
        let u8 = new Uint8Array(arrayBuffer)
        let b64encoded = btoa([].reduce.call(new Uint8Array(arrayBuffer),function(p,c){return p+String.fromCharCode(c)},''))
        let mimetype="image/jpeg"
        return "data:"+mimetype+";base64,"+b64encoded
    }

    openImage = (image) => {
        
        this.setState({baseImgURL:image.image}, () => {
            console.log( 'baseimgurl', this.state.baseImgURL)
            Api.getUserFromImage(image.id).then(
            user => {

                console.log("this is the response", user.data._id)
                this.setState({imageOf:user.data._id}, () => console.log("imageof set", this.state.imageOf))
            })
        });

        Api.downloadImage(image.image).then(imageData=>{
            this.setState(prevState => ({
                currentImage: image,
                modalIsOpen: !prevState.modalIsOpen,
                currentImagebase64: this._imageEncode(imageData.data),
                ...initialState
            }));
        })
    }

    toggle = () => {
        this.setState(prevState => ({
            modalIsOpen: !prevState.modalIsOpen
        }));
    }

    changeText = (event) => {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        });
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

    handleMouseDown = (e, type) => {
        const stateObj = this.getStateObj(e, type);
        document.addEventListener('mousemove',
            (event) => this.handleMouseMove(event, type)
        );
        this.setState({ ...stateObj })
    }

    handleMouseMove = (e, type) => {
        if (this.state.isTopDragging || this.state.isBottomDragging) {
            let stateObj = {};
            if (type === "bottom" && this.state.isBottomDragging) {
                stateObj = this.getStateObj(e, type);
            } else if (type === "top" && this.state.isTopDragging) {
                stateObj = this.getStateObj(e, type);
            }
            this.setState({
                ...stateObj
            });
        }
    };

    handleMouseUp = (event) => {
        document.removeEventListener('mousemove', this.handleMouseMove);
        this.setState({
            isTopDragging: false,
            isBottomDragging: false
        });
    }


    getBase64Image(img) {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL("image/png");
        return dataURL;
    }

    render() {
        // console.log(this.state.images);
        //let images = JSON.stringify(this.props.userImages);
        //const image = this.state.currentImage.image;
        const base_image = new Image();
        // base_image.src = image.src;
        base_image.crossOrigin="anonymous";
        //var wrh = base_image.width / base_image.height;
        var newWidth = 600;
        var newHeight = 400;
        const textStyle = {
            fontFamily: "Impact",
            fontSize: "50px",
            textTransform: "uppercase",
            fill: "#FFF",
            stroke: "#000",
            userSelect: "none"
        }

        return (
            <div >


                <div className="row col-12" id="mainBodyDiv">
                <div className="col-12" id="navbarDiv">
            <NavBar/>
            </div>
                    <div id="userProfileDiv">

                        <UserProfile componentDidMount={this.componentDidMount} sessionName={this.props.sessionName} sessionImage={this.props.sessionImage}/>
                    </div>
                    
                    <div id="memeCardDiv">
                        {this.state.images &&
                        <div className="content">
                            {this.state.images.map((image, index) => (
                                <div className="image-holder" key={image.id}>
                                    <img crossOrigin="anonymous"
                                        style={{
                                            width: "100%",
                                            cursor: "pointer",
                                            height: "100%"
                                        }}
                                        alt={index}
                                        src={image.image}
                                        onClick={() => this.openImage(image)}
                                        role="presentation"
                                    />
                                    <button className="btn btn-primary pinkButton" onClick={() => this.openImage(image)}>Make Meme</button>
                                </div>
                            ))}

                        </div>
                        }
                    </div>

                    <Modal className="meme-gen-modal" isOpen={this.state.modalIsOpen}>
          <ModalHeader toggle={this.toggle}>Make-a-Meme</ModalHeader>
          <ModalBody>
            <svg
              width={newWidth}
              id="svg_ref"
              height={newHeight}
              ref={el => { this.svgRef = el }}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink">
              <image
              className="memeCard2Image"
                ref={el => { this.imageRef = el }}
                xlinkHref={this.state.currentImagebase64}
                
              />
              <text
                style={{ ...textStyle, zIndex: this.state.isTopDragging ? 4 : 1 }}
                x={this.state.topX}
                y={this.state.topY}
                dominantBaseline="middle"
                textAnchor="middle"
                onMouseDown={event => this.handleMouseDown(event, 'top')}
                onMouseUp={event => this.handleMouseUp(event, 'top')}
              >
                  {this.state.toptext}
              </text>
              <text
                style={textStyle}
                dominantBaseline="middle"
                textAnchor="middle"
                x={this.state.bottomX}
                y={this.state.bottomY}
                onMouseDown={event => this.handleMouseDown(event, 'bottom')}
                onMouseUp={event => this.handleMouseUp(event, 'bottom')}
              >
                  {this.state.bottomtext}
              </text>
            </svg>
            <div className="meme-form">
              <FormGroup>
                <Label for="toptext">Top Text</Label>
                <input className="form-control roundedInput" type="text" name="toptext" id="toptext" placeholder="Add text to the top" onChange={this.changeText} />
              </FormGroup>
              <FormGroup>
                <Label for="bottomtext">Bottom Text</Label>
                <input className="form-control roundedInput" type="text" name="bottomtext" id="bottomtext" placeholder="Add text to the bottom" onChange={this.changeText} />
              </FormGroup>
              {/* <button onClick={() => this.convertSvgToImage()} className="btn btn-primary">Download</button> */}
              <div className="outerDivForPinkButton">
              <button onClick={this.saveMeme} className="btn btn-primary pinkButton">Save</button>
              </div>
            </div>
          </ModalBody>
        </Modal>
                </div>
            </div>
        )
    }


}


export default MemeMaker;