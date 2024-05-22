import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
  const { user } = useAuthContext()

  return (
    <header>
      <div className="container">
        <Link to="/">
          <div className="title">
            <img className="logo"
              src="../logo.png"
              alt="logo"
              width={50} height={50}
            />
            <h1>ThinkTank</h1>

          </div>

        </Link>
        <Link to="/Flashcards">
          <h1>Flashcards</h1>
        </Link>
        <Link to="/Quizzes">
          <h1>Quizzes</h1>
        </Link>
        {user && (
          <div>
            <Link to="/Profile">
              <span>{user.email}</span>
            </Link>
          </div>
        )}
        {!user && (
          <div>
            <Link to="/login">
              <img className="UserIcon"
                src="../user.png"
                alt="User Icon"
                width={45}
              />
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar