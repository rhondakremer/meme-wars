import React, { useEffect, useState } from 'react';
import UserProfile from '../../components/UserProfile';
import NavBar from '../../components/NavBar';
import { Modal, ModalHeader, ModalBody, FormGroup, Label } from 'reactstrap';
import Api from '../../utils/API';
import "./style.css";


const MemeMaker = (props) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [images, setImages] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [baseImgURL, setBaseImgURL] = useState(null);
    const [imageOf, setImageOf] = useState(null);
    const [currentImageBase64, setCurrentImageBase64] = useState(null);
    const [topText, setTopText] = useState("");
    const [bottomText, setBottomText] = useState("");

    const memeSettings = {
        topY: "10%",
        topX: "50%",
        bottomX: "50%",
        bottomY: "90%"
    }
    const newWidth = 600;
    const newHeight = 400;
    const textStyle = {
        fontFamily: "Impact",
        fontSize: "50px",
        textTransform: "uppercase",
        fill: "#FFF",
        stroke: "#000",
        userSelect: "none"
    }

    useEffect(() => {
        getUsers();
        let user = JSON.parse(localStorage.getItem('session'));
        setCurrentUser(user.id);
    }, []);

    const getUsers = () => {
        Api.getUsers()
            .then(res => {
                setImages(res.data);
            });
    }

    const saveMeme = () => {
        Api.saveMeme(baseImgURL, topText, memeSettings.topY, memeSettings.topX, bottomText, memeSettings.bottomY, memeSettings.bottomX, currentUser, imageOf)
            .then(memeSaved => {
                Api.startBattle(memeSaved.data._id, memeSaved.data.createdBy, memeSaved.data.imageOf)
                    .then(
                        newBattleInitiated => console.log("we did a thing", newBattleInitiated)
                    );
                alert("Yay! Your meme has been added");
                setModalIsOpen(false);
            })
    }

    const _imageEncode = (arrayBuffer) => {
        let b64encoded = btoa([].reduce.call(new Uint8Array(arrayBuffer), function (p, c) { return p + String.fromCharCode(c) }, ''))
        let mimetype = "image/jpeg"
        return "data:" + mimetype + ";base64," + b64encoded
    }

    const openImage = (image) => {
        setBaseImgURL(image.image);

        Api.getUserFromImage(image.id)
            .then(user => {
                setImageOf(user.data._id);
            })


        Api.downloadImage(image.image).then(imageData => {
            setCurrentImageBase64(_imageEncode(imageData.data))
            toggleModal();
        })
    }

    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen);
    }

    const changeText = (event) => {
        if (event.currentTarget.name === "bottomText") {
            setBottomText(event.currentTarget.value)
        }
        else if (event.currentTarget.name === "topText") {
            setTopText(event.currentTarget.value)
        }
    }

    return (
        <div>
            <div className="row col-12" id="mainBodyDiv">
                <div className="col-12" id="navbarDiv">
                    <NavBar />
                </div>
                <div id="userProfileDiv">
                    <UserProfile sessionName={props.sessionName} sessionImage={props.sessionImage} />
                </div>

                <div id="memeCardDiv">
                    {images &&
                        <div className="content">
                            {images.map((image, index) => (
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
                                    <button className="btn btn-primary pinkButton" onClick={() => openImage(image)}>Make Meme</button>
                                </div>
                            ))}

                        </div>
                    }
                </div>

                <Modal className="meme-gen-modal" isOpen={modalIsOpen}>
                    <ModalHeader toggle={toggleModal}>Make-a-Meme</ModalHeader>
                    <ModalBody>
                        <svg width={newWidth} id="svg_ref" height={newHeight} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <image className="memeCard2Image" xlinkHref={currentImageBase64} />
                            <text style={{ ...textStyle }} x={memeSettings.topX} y={memeSettings.topY} dominantBaseline="middle" textAnchor="middle">
                                {topText}
                            </text>
                            <text style={textStyle} dominantBaseline="middle" textAnchor="middle" x={memeSettings.bottomX} y={memeSettings.bottomY}>
                                {bottomText}
                            </text>
                        </svg>
                        <div className="meme-form">
                            <FormGroup>
                                <Label for="topText">Top Text</Label>
                                <input className="form-control roundedInput" type="text" name="topText" id="topText" placeholder="Add text to the top" onChange={changeText} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="bottomText">Bottom Text</Label>
                                <input className="form-control roundedInput" type="text" name="bottomText" id="bottomText" placeholder="Add text to the bottom" onChange={changeText} />
                            </FormGroup>
                            <div className="outerDivForPinkButton">
                                <button onClick={saveMeme} className="btn btn-primary pinkButton">Save</button>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        </div>
    )
}

export default MemeMaker;