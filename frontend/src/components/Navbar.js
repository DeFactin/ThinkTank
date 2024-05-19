import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>ThinkTank</h1>
        </Link>
        <Link to="/Flashcards">
          <h1>Flashcards</h1>
        </Link>
      </div>
    </header>
  )
}

export default Navbar