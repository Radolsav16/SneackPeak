export default function Vendor(){
    return(
        <>
          <section className="vendor-form-section">
      <h2>BECOME A VENDOR</h2>
      <form  className="vendor-form">
        <div className="form-group">
          <label>FULL NAME</label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="form-group">
          <label>EMAIL ADDRESS</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label>PHONE NUMBER</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="form-group">
          <label>TEXT US</label>
          <textarea
            name="message"
            placeholder="Write your message here"
            required
          />
        </div>
        <p className="disclaimer">
          * We will use your information solely to contact you and will not share it with anyone.
        </p>
        <button type="submit" className="submit-button">SUBMIT</button>
      </form>
    </section>
        </>
    )
}