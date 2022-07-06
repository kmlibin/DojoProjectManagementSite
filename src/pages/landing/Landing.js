import { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"

//images
import treebeard from '../../assets/images/treebeard.jpg'
import sauron1 from '../../assets/images/sauron1.jpg'
import gollum from '../../assets/images/gollum.jpg'

//styles
import './Landing.css'


export default function Landing() {

    //init aos
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <>
            <div className="plx-image1">
                <div className="text1">
                    <h1 data-aos="fade-up-right">Helping Middle Earth manage projects since the Second Age</h1>
                </div>
            </div>

            <div className="content">
                <h2>Welcome to The Dojo</h2>
                <hr data-aos="flip-right"></hr>
                <div className="text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </div>

            <div className="plx-image2"></div>

            <div className="content ">
                <h2>Testimonials</h2>
                <hr data-aos="flip-right"></hr>
                <div className="text3">

                    <section data-aos="zoom-in-right" className="testimonial">
                        <img src={treebeard} />
                        <h3>TreeBeard</h3>
                        <p>Loved the dojo - you thought I just had to yell and everyone knew what to do?
                            Think again! We were planning for the eventuality of a tower ambush for weeks.
                            The Dojo helped us figure out where everyone went.
                        </p>
                    </section>

                    <section data-aos="zoom-in-right" data-aos-delay="300" className="testimonial">
                        <img src={sauron1} />
                        <h3>Sauron</h3>
                        <p>I could not have waged war on Middle Earth without the excellent planning
                            tools provided by the Dojo. It allowed me to communicate with my many minions,
                            and I loved that I could assign different tasks to giants, orcs, and goblins.
                        </p>
                    </section>

                    <section data-aos="zoom-in-right" data-aos-delay="600" className="testimonial">
                        <img src={gollum} />
                        <h3>Gollum</h3>
                        <p>My precious and I use the Dojo to plan all of our weekly meetings, and it helps me
                            remember all of the things we say and do...
                        </p>
                    </section>

                </div>
            </div>

            <div className="plx-image3"></div>

            <footer className="content-footer">
                <h2>Inspired to try the Dojo? Click here to Sign Up!</h2>
                <hr></hr>
                {/* <h4>Already have an account? Login here</h4> */}
            </footer>
        </>
    )
}
