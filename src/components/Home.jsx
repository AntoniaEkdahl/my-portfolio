import "./Home.css";

function Home() {
  return (
    <>
      <div reappear className="textContainer" id="home">
        <h1 className="title animate__fadeInUp">
          Hello,
          <br />
          my name is Antonia.
        </h1>
        <div className="homeText animate__fadeInLeft">
          I´m a Frontend Developer student based in Malmö, with an interest in
          finding creative solutions to develop visually appealing websites.
          <br />I love exploring and creating. I'm a lifelong learner.
        </div>
      </div>
    </>
  );
}

export default Home;
