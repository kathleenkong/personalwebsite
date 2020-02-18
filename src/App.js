import React from "react";
import Projects from "./Projects";
import Experience from "./Experience";
import dog from "./dog.jpg";
import profphoto from "./profphoto.jpg";
import "./App.css";
import "./Projects.css";
import "./Projects.jsx";
import "./Experience.css";
import "./Experience.jsx";




export default function App() {
  return (
    <div class = "website">
      <div class= "name">
        <h1>KATHLEEN KONG</h1>
        <div class = "biography">
        <p> Computer Science and Business Administration Student at UC Berkeley </p>
      </div>
      </div>

      <div class = "hey">
        <h2>HEY THERE!</h2>
      </div>

      <div class="aboutme">
        <Projects
          img={profphoto}
          description = "My name is Kathleen Kong! I am from Vancouver, Canada and am currently a sophomore student at the University of California, Berkeley pursuing a dual degree in Computer Science and Business Administration. I am particularly interested in opportunities related to the intersection between technology and finance. I would love to connect with you. Feel free to reach out to me at kathleenkong@berkeley.edu."
          />
        </div>

      <div class="experience">
      <h2>EXPERIENCE</h2>
      </div>
   
      <div class = "nativefinance">
        <Experience
            title= "Native Finance – Data Science Intern"
            dates = "Jun. 2019 – Aug. 2019 (London, UK)"
            bulletone= "• Constructed pipelines to import public datasets relevant to commercial property lending activity in the United Kingdom"
            bullettwo = "•	Operated PostgreSQL in order to analyze such datasets and create a set of interactive data visualizations"
          />
        </div>

      <div class = "addquire">
        <Experience
              title= "Addquire Private Equity – Analyst Intern"
              dates = "May. 2019 – Aug. 2019 (Vancouver, BC)"
              bulletone= "• Conducted market research, analyzed financials and assisted with valuations of potential investment opportunities"
              bullettwo = "• Collected and analyzed data about performance and market conditions of portfolio companies"
            />
      </div>

      <div class="projects">
       <h2>PROJECTS</h2>
      </div>

      <div class="bbt">
        <Projects
          img={dog}
          title= "Bubble Tea Visualizer"
          description= "Created a visualizer calculating the amount of money you will save if you stop drinking bubble tea."
        />
      </div>

      <div class = "bottom">
       <h2>KATHLEEN KONG</h2>
      </div>

      <div class = "consult">
        <p>Developer + Consultant</p>
      </div>

      <div class = "contact">
        <a href="https://github.com/kathleenkong">GitHub</a>
        <p></p>
        <a href="https://www.linkedin.com/in/kathleenlkong/">LinkedIn</a>
        <p></p>
        <p></p>
        <p></p>
      </div>

      </div>

  );
}


