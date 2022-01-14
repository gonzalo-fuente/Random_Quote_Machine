import Twitter from "./Twitter"

const RandomQuote = ({ quote }) => {
  return (
    <div className="row justify-content-center">
      <div className="card w-75">
        <div className="card-header">
          All times Famous Quotes...
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-3">
          <p id="text">{ quote.quote }</p>
            <footer id="author" className="blockquote-footer">{ quote.author }</footer>
          </blockquote>
          <Twitter quote={ quote } />
        </div>
      </div>
    </div>
  )
}

export default RandomQuote
