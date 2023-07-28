import "./Work.css";
import { Github } from "react-bootstrap-icons";

function Work() {
  return (
    <>
      <div className="workContainer" id="work">
        <div className="workTitle">#work</div>
        <div className="container">
          <h1>This is the work page</h1>
          <div className="project">
            Webshop React
            <div>2023 | Education | React</div>
            <a
              className="projectLink"
              href="https://webshop-ae.netlify.app/"
              target="_blank"
              rel="noreferrer noopener"
            >
              See project
            </a>
            <br />
            <a
              className="projectLink"
              href="https://github.com/AntoniaEkdahl/webshop-react"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Github />
            </a>
          </div>
          <div className="project">
            MineSweeper
            <div>2023 | Education | React</div>
            <a
              className="projectLink"
              href="https://minesweeper-ae.netlify.app/"
              target="_blank"
              rel="noreferrer noopener"
            >
              See project
            </a>
            <br />
            <a
              className="projectLink"
              href="https://github.com/AntoniaEkdahl/mineSweeper"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Github />
            </a>
          </div>
          <div className="project">
            Digital Clock
            <div>2023 | Education | React</div>
            <a
              className="projectLink"
              href="https://digital-clock-ae.netlify.app/"
              target="_blank"
              rel="noreferrer noopener"
            >
              See project
            </a>
            <br />
            <a
              className="projectLink"
              href="https://github.com/AntoniaEkdahl/digital-clock"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Github />
            </a>
          </div>
          <div className="project">
            Whack-a-mole
            <div>2023 | Education | Angular</div>
            <a
              className="projectLink"
              href="https://whack-a-mole-ae.vercel.app/"
              target="_blank"
              rel="noreferrer noopener"
            >
              See project
            </a>
            <br />
            <a
              className="projectLink"
              href="https://github.com/AntoniaEkdahl/Whack-a-mole"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Github />
            </a>
          </div>
          <div className="project">
            Boring-API
            <div>2023 | Education | Angular</div>
            <a
              className="projectLink"
              href="https://boring-api-ae.vercel.app/"
              target="_blank"
              rel="noreferrer noopener"
            >
              See project
            </a>
            <br />
            <a
              className="projectLink"
              href="https://github.com/AntoniaEkdahl/Boring-API/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Github />
            </a>
          </div>
          <div className="proejct">
            Project StarWars
            <div>2022 | Education - group project | Vanilla JS</div>
            <a
              className="projectLink"
              href="https://group-project-starwars-encyclopedia.netlify.app/"
              target="_blank"
              rel="noreferrer noopener"
            >
              See project
            </a>
            <br />
            <a
              className="projectLink"
              href="https://github.com/AntoniaEkdahl/Projekt-Starwars"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Github />
            </a>
          </div>
          <div className="project">
            Ajax Weather in Malmö
            <div>2022 | Education | Vanilla JS</div>
            <a
              className="projectLink"
              href="https://weather-ajax-ae.vercel.app/"
              target="_blank"
              rel="noreferrer noopener"
            >
              See project
            </a>
            <br />
            <a
              className="projectLink"
              href="https://github.com/AntoniaEkdahl/weather-ajax"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Github />
            </a>
          </div>
          <div className="project">
            IKEA - replica
            <div>2022 | Education | CSS </div>
            <a
              className="projectLink"
              href="https://ikea-replica-ae.netlify.app/"
              target="_blank"
              rel="noreferrer noopener"
            >
              See project
            </a>
            <br />
            <a
              className="projectLink"
              href="https://github.com/AntoniaEkdahl/IKEA-replica"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Github />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
