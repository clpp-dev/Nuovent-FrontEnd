import "./Style.css";
import React from "react";
import { Featured } from "../../Layout/Featured/Featured";
import { TittleH2 } from "../../UI/TittleH2/TittleH2";

export const Home = () => {
  return (
    <div className="container-fluid bg-light">
      <div className="sectionOne">
        <div className="sectionHero">
          <TittleH2 textTittle="Encuentra tu espacio ideal con nosotros!"/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint nemo, cupiditate repellat quasi ipsum modi neque iste labore consequatur quos odio explicabo impedit aperiam! Dolorem animi aperiam libero non neque!
          </p>
        </div>
      </div>
      <svg className="svgWave"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff"  d="M0,224L60,218.7C120,213,240,203,360,213.3C480,224,600,256,720,261.3C840,267,960,245,1080,229.3C1200,213,1320,203,1380,197.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      <div className="pb-5">
        <Featured />
      </div>
    </div>
  );
};
