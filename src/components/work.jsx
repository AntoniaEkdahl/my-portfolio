import "./Work.css";
import { Github } from "react-bootstrap-icons";

function Work() {
  return (
    <>
      <div className="workTitle">#work</div>
      <div className="container">
        <h1>This is the work page</h1>
        <div className="workContainer">
          Webshop React
          <div>2023 | Education | React</div>
          <a
            href="https://webshop-ae.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            See project
          </a>
          <a
            href="https://github.com/AntoniaEkdahl/webshop-react"
            target="_blank"
            rel="noreferrer noopener"
          >
            <br />

            <Github />
          </a>
        </div>
        <div className="workContainer">
          MineSweeper
          <div>2023 | Education | React</div>
          <a
            href="https://minesweeper-ae.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            See project
          </a>
          <a
            href="https://github.com/AntoniaEkdahl/mineSweeper"
            target="_blank"
            rel="noreferrer noopener"
          >
            <br />

            <Github />
          </a>
        </div>
        <div className="workContainer">
          Digital Clock
          <div>2023 | Education | React</div>
          <a
            href="https://digital-clock-ae.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            See project
          </a>
          <a
            href="https://github.com/AntoniaEkdahl/digital-clock"
            target="_blank"
            rel="noreferrer noopener"
          >
            <br />
            <Github />
          </a>
        </div>
        <div className="workContainer">
          Whack-a-mole
          <div>2023 | Education | Angular</div>
          <a href="/" target="_blank" rel="noreferrer noopener">
            See project
          </a>
          <a
            href="https://github.com/AntoniaEkdahl/Whack-a-mole"
            target="_blank"
            rel="noreferrer noopener"
          >
            <br />
            <Github />
          </a>
        </div>
        <div className="workContainer">
          BoringAPI
          <div>2023 | Education | Angular</div>
          <a href="/" target="_blank" rel="noreferrer noopener">
            See project
          </a>
        </div>
        <div className="workContainer">
          Project StarWars
          <div>2022 | Education - group | Vanilla JS</div>
          <a
            href="https://group-project-starwars-encyclopedia.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            See project
          </a>
          <a
            href="https://github.com/AntoniaEkdahl/Projekt-Starwars"
            target="_blank"
            rel="noreferrer noopener"
          >
            <br />
            <Github />
          </a>
        </div>
        <div className="workContainer">
          Ajax Weather
          <div>2022 | Education | Vanilla JS</div>
          <a
            href="https://github.com/AntoniaEkdahl/JS1-Uppgift2"
            target="_blank"
            rel="noreferrer noopener"
          >
            <br />
            <Github />
          </a>
        </div>
      </div>
    </>
  );
}

export default Work;
