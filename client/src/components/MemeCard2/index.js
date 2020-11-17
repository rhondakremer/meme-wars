import React from 'react';
import "./style.scss";

const MemeCard2 = (props) => {
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
            <div id="svg_ref">
                <div className="memeCard2Image" style={{ backgroundImage: "url(" + props.src + ")" }}>
                    <svg >
                        <text
                            style={{ ...textStyle }}
                            x={props.topX}
                            y={props.topY}
                            dominantBaseline="middle"
                            textAnchor="middle"
                        >
                            {props.topText}
                        </text>
                        <text
                            style={{ ...textStyle }}
                            dominantBaseline="middle"
                            textAnchor="middle"
                            x={props.bottomX}
                            y={props.bottomY}
                        >
                            {props.bottomText}
                        </text>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default MemeCard2;