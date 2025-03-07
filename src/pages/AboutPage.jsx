import About from "../components/about/About";
import Goal from "../components/goal/Goal";


export default function AboutPage({
    setWhite
}){
    setWhite(true);
    document.body.style.backgroundColor = 'white';
    return(
        <>
           <section className="about">
        <div className="about-container">
          <div className="about-text">
            <h2>ABOUT US</h2>
            <p>
              <strong>
                {" "}
                We are a team of young enthusiasts on a mission to transform the sneakerhead culture in Bulgaria. Our goal? To build a tight-knit and passionate community where people can share their love for sneakers, street fashion, and everything in between.
We are the first to bring the SneakerCon experience to Bulgaria!  The road ahead is long, but with your support, we can make it happen.
Are you ready to be part of history?
              </strong>
            </p>
          </div>
          <div className="about-image">
            <img src="/assets/3d-chicago-unscreen.gif" alt="Sneaker" />
          </div>
        </div>
      </section>
            <Goal />
        </>
    )
}