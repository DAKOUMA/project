import logoReact from "../assets/react.png";
import logoFigma from "../assets/figma.png";
import logoJavascript from "../assets/javascript.png";
import logoHtml from "../assets/html.png";
import logoCss from "../assets/css.png";
import logoTailwind from "../assets/tailwind.png";
import dev from "../assets/dev.png"
import photo from "../assets/1684472510576.jpeg"
import { useState } from "react";


function Home() {
    const [note, setNote] = useState("")


    return (
        <main className="principal">
            <section className="homepage h-screen pt-60">
                <p className="text-center text-5xl">Portfolio </p>
                <p className='text-center text-xl'>designed by</p> <br/>
                <p className="dakouma text-center text-8xl">DAKOUMA</p>
                <img className="absolute bottom-0 w-96" src={dev}/>
                <ul className="homepage-social absolute right-5 bottom-5 h-40 flex flex-col justify-between">
                    <li className="homepage-social_list"><a className="homepage-social_link" href="#"><i class="fa-brands fa-linkedin-in fa-lg"></i></a></li>
                    <li className="homepage-social_list"><a className="homepage-social_link" href="#"><i class="fa-brands fa-whatsapp fa-lg"></i></a></li>
                    <li className="homepage-social_list"><a className="homepage-social_link" href="#"><i class="fa-brands fa-google fa-lg"></i></a></li>
                </ul>
            </section>
            <section className="preview px-16 pb-40 ">
                <h1 className="text-5xl text-center mb-20 pt-32">Who's Dakouma?</h1>
                <div className="p-8  preview-card text-center">
                    <div>
                        <p className="text-3xl">RAMERISON ANSELME</p>
                        <p className="text-xl">(DAKOUMA)</p>
                        <p className="text-xl">Front-end Developper</p>
                    </div>
                    <img src={photo} className="w-60 rounded-full mx-auto mt-8"/>
                </div>
            </section>
            <section className="skills px-6 pb-40">
                <h1 className="text-5xl text-center mb-20 pt-32">Skills</h1>
                <ul className="skills-list px-4 grid grid-cols-2 gap-y-32">
                        <li className="skills-container rounded-full mx-auto"><img className="skills-image w-16 h-16" src={logoHtml}/></li>
                        <li className="skills-container rounded-full mx-auto"><img className="skills-image w-16 h-16" src={logoCss}/></li>
                        <li className="skills-container rounded-full mx-auto"><img className="skills-image w-16 h-16" src={logoJavascript}/></li>
                        <li className="skills-container rounded-full mx-auto"><img className="skills-image w-16 h-16" src={logoReact}/></li>
                        <li className="skills-container rounded-full mx-auto"><img className="skills-image w-16 h-16" src={logoTailwind}/></li>
                        <li className="skills-container rounded-full mx-auto"><img className="skills-image w-16 h-16" src={logoFigma}/></li>
                </ul>
            </section>
            <section className="portfolio pb-10 mb-20">
                <div className=" text-center mb-20 pt-32">
                <h1 className="text-5xl mb-6">
                    Other portfolio
                </h1>
                <p className="text-xl">the other portfolio section seems empty as this is my first portfolio. But don't worry the others will come</p>
                </div>
                <div className="portfolio-container">
                  <form className="portfolio-form">
                      <fieldset>
                          <div className="field text-center">
                            <label htmlFor="range" className="text-xl">My site is</label> <br/>
                            <input
                                min={0}
                                max={100}
                                onChange={e => { if (e.target.value < 33) {
                                                    setNote("Bad")
                                                } else if (e.target.value > 66){
                                                    setNote("Good")
                                                } else {
                                                    setNote("Medium")
                                                }}}
                                className=""
                                type="range"
                                id="range"
                                name="range"/>
                            <p className="note text-xl">{note}</p>
                            <br/>
                            <br/>
                            <textarea 
                                className="text-xl w-2/4 h-32 p-3 text-center" 
                                placeholder="leave a comment so that I can improve my skills"
                                id="comment"
                                name="comment"
                                >
                            </textarea>
                            
                          </div>
                      </fieldset>
                  </form>

                </div>
            </section>
        </main>
    )
}

export {Home}