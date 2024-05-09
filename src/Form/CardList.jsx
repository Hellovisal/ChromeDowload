// import React from 'react';
import '../Form/CarList.css';
// import p1 from "../assets/cartoon2.jpg"
const CardList = (props) => {
    const {day,imgSrc,title,details}=props;
    return (
        <>
            <div id="title-bar">
                <h3 className="day">{day}</h3>
            </div>
            <div id="container-full">
                <div className="empty"></div>
                <div className="container">
                    <div className="image-src">
                        <img src={imgSrc}alt="" />
                    </div>
                    <div className="description">
                        <h1><u style={{ color: 'rgb(0, 68, 255)' }}>{title}</u></h1>
                        <h3>{details}</h3>
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardList;
