import "./About.css";

function About() {
  return (
    <>
      <div className="aboutContainer" id="about">
        <div className="aboutTitle">#about</div>
        <div className="imgContainer">
          <img
            className="img"
            src="/assets/images/AntoniaEkdahl.jpg"
            alt="Antonia Ekdahl"
          />
        </div>
        <div className="aboutText">
          <div className="paragraf">
            Hi, my name is Antonia Ekdahl I was born in 1992 and live in Malmö
            with a passion for learning and creating. I have currently finished
            my first year at the Frontend Developer program at EC Utbildning in
            Helsingborg. During this initial time of the education I have
            established solid knowledge in HTML, CSS and JavaScript including
            various frameworks.
          </div>
          <div className="paragraf">
            I have background and experience in social work and I have a
            bachelor in criminology with a specialisation in psychiatric
            nursing.
          </div>
          <div className="paragraf">
            Right now, I am looking for an internship for this fall where I can
            use and boost my skills in frontend development. The periods are 20
            November 2023 – 9 February 2024 and 11 March – 7 June 2024. Feel
            free to contact me if you have any recommendation or internship to
            offer.{" "}
          </div>
          <div className="resumeContainer">
            <a
              href="https://drive.google.com/file/d/1BQLYIUlXwNZA8-7nzyMGak-IyMY5ULs3/view?usp=drive_link"
              target="_blank"
              rel="noreferrer noopener"
              className="resumeLink"
            >
              My resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
