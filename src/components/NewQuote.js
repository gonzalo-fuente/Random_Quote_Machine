const NewQuote = ({ setQuote }) => {
  return (
    <div className="row justify-content-center d-grid">
      <button 
        id="new-quote"
        className="btn btn-outline-dark mt-4 btn-lg"
        onClick={ setQuote }
      >
        New Quote
      </button>
    </div>
  )
}

export default NewQuote
