import { useEffect } from 'react'
import { Link } from 'react-router-dom'
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
            <div className="plx-image1" title="A dojo in the mountains" alt="Photo by VietNam Beautiful on Unsplash ">
                <div className="text1">
                    <h1 data-aos="fade-up-right" data-aos-delay="300">Helping Middle Earth manage projects since the Second Age</h1>
                </div>
            </div>

            <main className="content">
                <h2>Welcome to The Dojo</h2>
                <hr data-aos="flip-right"></hr>
                <div className="text2" data-aos="fade-up-right">Throughout the eras, Middle Earth has been home to adventurous,
                    hard-working folk. We’ve all heard stories of how Dwarves painstakingly mine great, kingly halls,
                    and you would be hard pressed to find anyone in Middle Earth who knows nothing of the immense
                    power Sauron achieved throughout the Second Age. But how exactly did the dwarves collaborate so well to carve
                    out the marvel of Khazad- dûm? How did Sauron manage to build the impressive fortress of Barad-dûr
                    in only 600 years, and how did his forces coordinate a surprise attack on Minas Ithil?
                    What allowed the Númenor to so quickly establish their communities in Middle Earth?
                    <br /><br />
                    The Dojo played a key role in all these lofty endeavors, and our services have helped hundreds of other ambitious teams
                    achieve their goals. Perhaps you’ve heard about the Alliance of Men and Elves that defeated Sauron? Or maybe
                    you’ve simply heard your neighbor, Barliman Butterbur, talk about how his team manages to find all the best
                    ales in the region. Whether you’re looking to destroy a great evil, or just plan a 111th birthday party,
                    let The Dojo guide your team to success!
                </div>
            </main>

            <div className="plx-image2" title="a team trekking to Mordor" alt="Photo by Tobias Mrzyk on Unsplash"></div>

            <section className="content content2">
                <h2>Testimonials</h2>
                <hr data-aos="flip-right"></hr>
                <div className="text3">

                    <section data-aos="zoom-in-right" className="testimonial">
                        <div className="client-info">
                            <img src={sauron1} />
                            <h3>Sauron</h3>
                        </div>
                        <p>"What can I say, I’ve used The Dojo to plan everything from
                            building my fortress to deciding how best to gain the trust of the
                            Numenor. It allows me to gather all the best minions into one place
                            (whether it be builders, fighters, or the rare “thinking-type”);
                            from there, we can figure out the best way to complete any given task.
                            <br /><br />
                            The Dojo has helped make Middle Earth a much smaller place –
                            without it, I would never have been able to achieve my immense power."
                        </p>
                    </section>

                    <section data-aos="zoom-in-right" data-aos-delay="200" className="testimonial">
                        <div className="client-info">
                            <img src={treebeard} />
                            <h3>TreeBeard</h3>
                        </div>
                        <p>"The Entish community often uses the Dojo to plan community projects,
                            and it recently came in quite handy when we stormed
                            the White Tower. The Dojo helped us plan for the eventuality of removing
                            Saruman down to the last detail,
                            including who would sound the war cry that magicked everyone
                            to battle. When the time came, everyone knew how to storm the grounds,
                            and exactly how to stomp on
                            orcs to get the best possible results.
                            <br /><br />
                            The Dojo is currently helping us find the Ent wives, and it has made the
                            process much more clear. Thanks, Dojo!"
                        </p>
                    </section>

                    <section data-aos="zoom-in-right" data-aos-delay="500" className="testimonial">
                        <div className="client-info">
                            <img src={gollum} />
                            <h3>Gollum</h3>
                        </div>
                        <p>"In another life, I think my cousin Déagol introduced me to The Dojo,
                            but now we uses it all the times [sic]! My Precious and I love The
                            Dojo - it is so easy to use its planning tools. <br /><br />We recently used it to figure
                            out the best way to trick Goblins into our cave. Even though we rarely disagree (it's
                            like we are the same person!), The Dojo's clear project management system
                            let us
                            talk about how best to delegate tasks in order to attain our goal. Indeed, we ended
                            up with a nice tasty goblin!"
                        </p>
                    </section>

                </div>
            </section>

            <div className="plx-image3" title="Yes We Can!" alt="Photo by Brett Jordan on Unsplash"></div>

            <footer className="content-footer">
                <h2>Inspired to try the Dojo? Click<Link to='/signup'> here</Link> to sign up!</h2>
                <hr></hr>
                {/* <h4>Already have an account? Login here</h4> */}
            </footer>
        </>
    )
}
