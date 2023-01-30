import React from "react";
import style from "./Styles.module.css";

export default function Header(props) {
    return (
        <div className={style.headerContainer}>
            <h1 className={style.mainTitle}>My Weather App</h1>
            <p className={style.subTitle}>
                You can check the weather in the Weather Section
            </p>
            <img
                className={style.headerImage}
                src={`https://media.istockphoto.com/id/533236170/es/foto/maresias.jpg?s=612x612&w=0&k=20&c=u69FJlOyd8pbkftF1cpd2LYyTJMznkSyBz16Sb66WK0=`}
                 alt="sunset"
            />
           
                      
        </div>
    );
}