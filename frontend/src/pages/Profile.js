import { Link } from "react-router-dom";
import { useEffect } from "react"
import FlashcardDetails from "../components/FlashcardDetails"
import '../Profile.css';
import FlashcardForm from "../components/FlashcardForm"
import { useFlashcardsContext } from "../hooks/useFlashcardsContext"

const Profile = () => {
  return (
    
        <div>
            <div className="profileContainer">
             
                <div className="ProfileWrapper">
                    <div className="profileInfo">
                        <div className="ProfileInfoHeader">
                        <div className="name">
                            <p>Hana Hannani</p>
                        </div>
                                <img className="ProfilePicture"
                                    src="../Person.PNG"
                                    alt="Person"
                                    width={150}
                                />
                                
                         </div>
                      
                    </div>

                    <div className="profileInfo2">
                       
                        <div className="userInfo">

                            <div className="userInfoContainer"> 
                                <p> Student</p>
                            </div>

                            <div className="userInfoContainer"> 
                                <p> Software engineer</p>
                            </div>  

                            <div className="userInfoContainer"> 
                                <p> Sarajevo, Bosnia and Herzegovina </p>
                            </div>
    
                        </div>

                        <div className="editButton">
                            <button type="submit" className="edit-button">
                                Edit profile
                            </button>
                        </div>
                    </div>    

                   
                   
                    <div className="profileCards">
                        <div className="Intro-Card2-Header">
                            
                            <h1>My progress</h1>
                        </div>
                        <h2> Quiz 1</h2>
                        <h2> Quiz 2</h2>
                        <h2> Flashcards</h2>
                    </div>

                    <div className="profileCards">
                        <div className="Intro-Card2-Header">
                          <h1>To Do list</h1>
                        </div>
                        <h2> Quiz 1</h2>
                        <h2> Quiz 2</h2>
                        <h2> Flashcards</h2>
                    </div>

                    <div className="yourQuizzes">
                        <div className="Intro-Card2-Header">
                          <h1>Your quizzes and flashcards</h1>
                        </div>

                        <div className="yourQuizzes-container">
                            <div className="Intro-Card2-Header">
                            <h1>Quiz 1</h1>
                            </div>
                        </div>

                        <div className="yourQuizzes-container">
                            <div className="Intro-Card2-Header">
                            <h1> Networks flashcards</h1>
                            </div>
                        </div>

                        <div className="yourQuizzes-container">
                            <div className="Intro-Card2-Header">
                            <h1> Quiz 2</h1>
                            </div>
                        </div>
                      
                    </div>

                   
                </div>
              
            </div>
        </div>


   
   /* <div>
            <div className="profileContainer">
                <h1 className="heading">Hi Hana</h1>
                <div className="Wrapper">
                    <div className="profileCards">
                        <div className="Intro-Card2-Header">
                            <img className="PersonImage"
                                src="../Person.PNG"
                                alt="Person"
                                width={150}
                            />
                            <h3>Hana Hannani</h3>
                        </div>
                        <p> Name Surname</p>
                        <p> Age: 23</p>
                        <p> Occupation</p>
                    </div>
                    
                    <div className="profileCards">
                        <div className="Intro-Card2-Header">
                          <h3>To Do list</h3>
                        </div>
                        <h2> Quiz 1</h2>
                        <h2> Quiz 2</h2>
                        <h2> Flashcards</h2>
                    </div>

                    <div className="profileCards">
                        <div className="Intro-Card2-Header">
                            <img className="PersonImage"
                                src="../Person.PNG"
                                alt="Person"
                                width={150}
                            />
                            <h3>Hana Hannani</h3>
                        </div>
                        <p> Name Surname</p>
                        <p> Age: 23</p>
                        <p> Occupation</p>
                    </div>
                   
                </div>
              
            </div>
        </div> */
      
  );
};

export default Profile