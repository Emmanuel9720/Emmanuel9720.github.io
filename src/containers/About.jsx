import React from "react";
import style from "./Styles.module.css";

export default function About(props) {
    return (
        <div className={style.aboutContainer}>
            <img
                className={style.aboutSectionImage}
                src="https://openexpoeurope.com/wp-content/uploads/2019/12/portada.jpg"
                alt="sunset2"
            />
            <p className={style.aboutTitle}>About</p>
            <p className={style.aboutText}>
            Front-end developer with +2 years of experience,
             currently working for the sightseeing
             industry creating digital solutions that are consumed in more than 5 countries,
              I have also collaborating for different applications using technologies such as JavaScript,
               Vue, Vuex, React, Redux, NodeJs, Mongo and Mongoose.
            </p>
            <ul className={style.socialMediaBox}>
                <li>
                    
                </li>
               
                <li>
                
                </li>
            </ul>
        </div>
    );
}