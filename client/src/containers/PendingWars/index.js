import React, { Component } from 'react';
import UserProfile from '../../components/UserProfile';
import Api from '../../utils/API';
import NavBar from '../../components/NavBar';
import PendingWars from "../../components/pendingWars";
import "../MemeMaker/style.css"
import "./style.css";
import { Modal, ModalHeader, ModalBody, FormGroup, Label } from 'reactstrap';

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

class BattlePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: "",
            memeages: [],
            battles: null,
            initiators: [],
            currentImage: null,
            modalIsOpen: false,
            currentImagebase64: null,
            ...initialState,
            baseImgURL: "",
            createdBy: null,
            imageOf: null,
        }
    }

    componentDidMount() {
        Api.getUsers()
            .then(() => {
                let user = JSON.parse(localStorage.getItem('session'));
                this.setState({ currentUser: user.id, createdBy: user.id }, () =>

                    Api.getMyChallenges(this.state.currentUser)
                        .then(res =>
                            this.setState({ battles: res.data }, () =>
                                this.getBattleMemes())
                        )
                )
            });
    }

    //this should be used with getPendingWarMemes below and getBattles() above to get the info to render the memes
    getBattleMemes() {
        let memeBattles = [];
        for (let i = 0; i < this.state.battles.length; i++) {
            memeBattles.push([this.state.battles[i].meme1, this.state.battles[i].meme2, this.state.battles[i].meme1Initiator])
        } this.setState({ memeBattles: memeBattles }, () => this.getPendingWarMemes())
    }
    // don't forget this one with the one above!!
    getPendingWarMemes() {
        for (let i = 0; i < this.state.memeBattles.length; i++) {
            Api.getMemeById(this.state.memeBattles[i][0])
                .then(res => this.setState({ memeages: [...this.state.memeages, res.data[0]] }))
            Api.getOne(this.state.memeBattles[i][2])
                .then(res => this.setState({ initiators: [...this.state.initiators, res.data.image] }))
        }

    }


    saveMeme = () => {
        Api
            .saveMeme(this.state.baseImgURL, this.state.toptext, this.state.topY, this.state.topX, this.state.bottomtext, this.state.bottomY, this.state.bottomX, this.state.createdBy, this.state.imageOf)
            .then(memeSaved => {
                console.log("Saved", memeSaved)
                this.setState({ modalIsOpen: false })

                Api.respondToChallenge(this.state.battles[this.state.index]._id, {
                    meme2: memeSaved.data._id
                })

                // Api.
                //     startBattle(memeSaved.data._id, memeSaved.data.createdBy, memeSaved.data.imageOf)
                //     .then(newBattleInitiated => console.log("we did a thing", newBattleInitiated))
                //         // debugger;
                //         console.log("HOW DOES THIS LOOK?", JSON.stringify(memeSaved.data._id));
                //         alert("Yay! Your meme has been added")
                //         this.setState({modalIsOpen: false})
            })
    }

    _imageEncode(arrayBuffer) {
        let b64encoded = btoa([].reduce.call(new Uint8Array(arrayBuffer), function (p, c) { return p + String.fromCharCode(c) }, ''))
        let mimetype = "image/jpeg"
        return "data:" + mimetype + ";base64," + b64encoded
    }

    openImage = (image, index) => {
        // console.log(index)
        this.setState({ baseImgURL: image, imageOf: this.state.battles[index].meme1Initiator, index: index });

        Api.downloadImage(image).then(imageData => {
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
        const base_image = new Image();
        // base_image.src = image.src;
        base_image.crossOrigin = "anonymous";
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
            <div>
                <div className="col-12" id="navbarDiv">
                    <NavBar />
                </div>
                <div className="row col-12" id="mainBodyDiv">
                    <div id="userProfileDiv">
                        <UserProfile componentDidMount={this.componentDidMount} sessionName={this.props.sessionName} sessionImage={this.props.sessionImage} />
                    </div>
                    {this.state.memeages.length === 0 &&
                        <div id="holds-all-the-memecard-divs">
                            <br />
                            <br />
                            <h3><center>Great job, you have answered all battle requests!</center></h3></div>
                    }
                    {this.state.memeages &&
                        <div id="holds-all-the-memecard-divs">
                            <div className="row" id="pendingWarsFeed">
                                <div className="col-6 " id="MemeOfYouOnPendingWarsPage">
                                    {this.state.memeages.map((item, index) => (
                                        <div key={item._id}>
                                            <PendingWars id={item._id} src={item.baseImgURL} topX={item.topX} topY={item.topY} bottomY={item.bottomY} bottomX={item.bottomX} topText={item.topText} bottomText={item.bottomText} index={index} />
                                            <div id="vsDiv">
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="col-4" id="PictureOfOpponentOnPendingWarsPage">
                                    {this.state.initiators &&
                                        <div className="content">
                                            {this.state.initiators.map((image, index) => (
                                                <div className="image-holder" id="imageHolderOnPendingWars" key={index}>
                                                    <img crossOrigin="anonymous"
                                                        style={{
                                                            width: "100%",
                                                            cursor: "pointer",
                                                            height: "100%"
                                                        }}
                                                        alt={index}
                                                        src={image}
                                                        onClick={() => this.openImage(image, index)}
                                                        role="presentation"
                                                    />

                                                </div>
                                            ))}
                                        </div>
                                    }
                                </div>
                            </div>
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
            </div>);
    }
}

export default BattlePage;

