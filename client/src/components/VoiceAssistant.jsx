import React, { useState } from "react";

const VoiceAssistant = () => {
    const [isRecording, setIsRecording] = useState(false);

    const toggleRecording = () => {
        setIsRecording((prev) => !prev);
    };

    return (
        <div>
            <div className={`box ${isRecording ? "recording" : ""}`}>
                <div className="object" id="record">
                    <div className="outline"></div>
                    <div className={`outline ${isRecording ? "delayed" : ""}`} id="delayed"></div>
                    <div className="button"></div>
                    <audio id="myAudio" autoPlay></audio>
                    <div
                        className={`button ${isRecording ? "active" : ""}`}
                        id="circlein"
                        onClick={toggleRecording}
                    >
                        <svg
                            className="mic-icon"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 1000 1000"
                            xmlSpace="preserve"
                            style={{ fill: "#000000" }}
                        >
                            <g>
                                <path
                                    d="M500,683.8c84.6,0,153.1-68.6,153.1-153.1V163.1C653.1,78.6,584.6,10,500,10c-84.6,0-153.1,68.6-153.1,153.1v367.5C346.9,615.2,415.4,683.8,500,683.8z M714.4,438.8v91.9C714.4,649,618.4,745,500,745c-118.4,0-214.4-96-214.4-214.4v-91.9h-61.3v91.9c0,141.9,107.2,258.7,245,273.9v124.2H346.9V990h306.3v-61.3H530.6V804.5c137.8-15.2,245-132.1,245-273.9v-91.9H714.4z"
                                />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="captions" id="captions">
                <span>Captions</span>
            </div>
            <div>
                <a href="https://github.com/skverma618" target="_blank" rel="noopener noreferrer">
                    <button>
                        <svg
                            height="32"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="32"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                            ></path>
                        </svg>
                        skverma618
                    </button>
                </a>
            </div>
        </div>
    );
};

export default VoiceAssistant;
