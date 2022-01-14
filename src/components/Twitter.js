const Twitter = ({ quote }) => {
  return (
    <div className="text-end">
      <a 
        href={
          'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
          encodeURIComponent('"' + quote.quote + '" ' + quote.author)
        }
        id="tweet-quote"
        className="btn btn-outline-primary"
        target="_blank"
      >
        <i class="fab fa-twitter"></i>
      </a>
    </div>
  )
}

export default Twitter
