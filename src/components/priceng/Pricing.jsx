export default function Pricing(){
    return(
        <>
        <section>
        <div className="pricing-section">
      <h1 className="section-title">SOFIA 2025</h1>
      <div className="card-container">
        <div className="card">
          <h2 className="card-title">EARLY-BIRD</h2>
          <div className="card-image">
            <img src="./src/assets/lgwb.png"  alt="Early-Bird" />
          </div>
          <div className="card-price">15 BGN</div>
          <ul className="card-features">
            <li>LIMITED TIME TO BUY</li>
            <li>BUY & TRADE THE BEST SNEAKERS</li>
            <li>ENJOY MUSIC</li>
            <li>MEET SNEAKERHEADS</li>
            <li>PLAY AND WIN AMAZING PRIZES</li>
          </ul>
          <button className="card-button">BUY</button>
        </div>

        <div className="card">
          <h2 className="card-title">BASIC</h2>
          <div className="card-image">
            <img src="./src/assets/lgwb.png"  alt="Basic" />
          </div>
          <div className="card-price">20 BGN</div>
          <ul className="card-features">
            <li>BUY & TRADE THE BEST SNEAKERS</li>
            <li>ENJOY MUSIC</li>
            <li>MEET SNEAKERHEADS</li>
            <li>PLAY AND WIN AMAZING PRIZES</li>
          </ul>
          <button className="card-button">BUY</button>
        </div>

        <div className="card">
          <h2 className="card-title">SNEAKERHEAD</h2>
          <div className="card-image">
            <img src="./src/assets/lgwb.png" alt="Sneakerhead" />
          </div>
          <div className="card-price">25 BGN</div>
          <ul className="card-features">
            <li>LIMITED NUMBER</li>
            <li>BUY & TRADE THE BEST SNEAKERS</li>
            <li>ENJOY MUSIC</li>
            <li>MEET SNEAKERHEADS</li>
            <li>PLAY AND WIN AMAZING PRIZES</li>
            <li>CHANCE TO WIN 400+ BGN SNEAKER</li>
          </ul>
          <button className="card-button">BUY</button>
        </div>
      </div>
    </div>
    </section>
        </> 
    )
}