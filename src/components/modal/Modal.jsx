export default function Modal({
    onClose
}){

    return(
        <>
               <div className="modal-overlay">
          <div className="modal-content">
            <p className="modal-message">Tickets will be available for purchase shortly. Stay tuned!</p>
            <button className="close-button" onClick={onClose}>Close</button>
          </div>
        </div>
        </>
    )
}