import Quote from "../Quote/Quote";

const quotes = [
  {
    quote: "you don't know words",
    author: "devon"
  },
  {
    quote: "jeqzn",
    author: "hmmm"
  },
  {
    quote: "its not magic- it's just linear algebra",
    author: "prof karp"
  }
]

export default function Homepage(props) {
  return (
    <>
      <div>
        This is the home page! Here are some quotes:
      </div>
      <div>
        {
          quotes.map((quote, i) => <Quote quote={quote.quote} author={quote.author} key={i}/>)
        }
      </div>
    </>
  )
}