export default function Sponsor() {
  return (
    <>
      <section className="sponsors">
        <h2>SPONSORS</h2>
        <div className="sponsor-logos">
          <img src="./src/assets/logoipsum-345.svg" alt="Sponsor 2" />
          <img src="./src/assets/logoipsum-317.svg" alt="Sponsor 2" />
          <img src="./src/assets/logoipsum-294.svg" alt="Sponsor 2" />
          <img src="./src/assets/logoipsum-291.svg" alt="Sponsor 1" />
        </div>
        <div className="sponsor-text">
          <p>
            Join <strong>SNEAKPEAK</strong> as a Partner, Sponsor, or Investor!
            SNEAKPEAK is not just an event – it's a movement that unites sneaker
            culture, fashion, and business. If you want to showcase your brand,
            reach thousands of sneaker fans, or support the biggest sneaker
            event in Bulgaria, we have a place for you!
          </p>
          <div className="sponsor-contact">
            <p>📞 +359 888 407 209</p>
            <p>
              📧{" "}
              <a href="mailto:sneak.partners@gmail.com">
                sneak.partners@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
