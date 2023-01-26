import React from "react";

export default function Tile(props){
    return (
        <div className="Tile">
            <img src={"../assets/img/"+props.imageUrl} alt={props.title} className="Tile__img" />
            <div className="content">
                <div className="content__location">
                <i class="fa-solid fa-location-dot sm"></i>
                    <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8" className="content__location-link">
                        View on Map
                    </a>
                </div>
                <h3 className="content__title">
                    {props.title}
                </h3>
                <h5 className="content__date">
                    {props.startDate + " - " + props.endDate}
                </h5>
                <p className="content__text">
                    {props.description}
                </p>
            </div>
        </div>
    );

}