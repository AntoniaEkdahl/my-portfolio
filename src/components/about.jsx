import "./About.css";

function About() {
  return (
    <>
      <div className="aboutTitle">#about</div>
      <div className="aboutText">
        <div className="paragrafOne">
          Hi, my name is Antonia Ekdahl i was born in 1992 and live in Malmö
          with a passion for learning and creating. I have currently finished my
          first year at the Frontend Developer program at EC Utbildning in
          Helsingborg. During this initial time of the education I have
          established solid knowledge in HTML, CSS and JavaScript including
          various frameworks.
        </div>
        <div className="paragrafTwo">
          I have background and experience in social work and a bachelor in
          criminology with a specialization in psychiatric nursing.
        </div>
        <div>
          <a href=".." target="_blank">
            My resume
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
