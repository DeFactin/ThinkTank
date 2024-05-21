import { Link } from "react-router-dom"

const Home = () => {

    return (
        <div>
            <div className="home">
                <h1 className="Heading">Welcome to ThinkThank</h1>
                <div className="Wrapper">
                    <div className="Intro-Card2">
                        <div className="Intro-Card2-Header">
                            <img className="PersonImage"
                                src="../Person.PNG"
                                alt="Person"
                                width={150}
                            />
                            <h3>Hana Hannani</h3>
                        </div>
                        <p>"ThinkTank has transformed my learning journey. As a student, finding
                            engaging study methods was always a challenge. But since discovering
                            ThinkTank, I've found myself eagerly diving into quizzes on various topics
                            every day."</p>
                    </div>
                    <img className="Chestimage"
                        src="../Chest.PNG"
                        alt="Chest"
                        width={250}
                    />
                    <div className="Intro-Card">
                        <p>Welcome to our quiz app, where knowledge meets fun!
                            Whether you're a seasoned learner or just starting your educational journey,
                            our platform offers a diverse range of quizzes to suit every interest and level.
                            Dive into fascinating topics, challenge your mind, and expand your horizons as you
                            embark on an interactive learning experience like no other. From history to science,
                            literature to pop culture, our quizzes cover it all.
                            Join our community of learners today and let the adventure begin! 💜
                        </p>
                    </div>
                </div>
                <div className="button">
                    <Link to="/Quizzes">
                        <button
                            className="custom-button"
                        >
                            Start Learning
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home