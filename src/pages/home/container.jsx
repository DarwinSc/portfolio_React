import Jobs from '../../components/jobs'
import Skills from '../../components/skills';
const homePageContainer = () => {
    return(
        <>
            <div class="scroll-up-btn">
            <i class="fa fa-angle-up"></i>
        </div>
        <nav class="navbar">
            <div class="max-width">
                <div class="logo">
                    <a href="#home">Portfo<span>lio.</span></a>
                </div>
                    <ul class="menu">
                        <li><a href="#home">Inicio</a></li>
                        <li><a href="#about">Sobre mi</a></li>
                        <li><a href="#skills">Habilidades</a></li>
                        <li><a href="#jobs">Trabajos</a></li>
                        <li><a href="#contact">Contacto</a></li>
                    </ul>
                    <div class="menu-btn">
                        <i class="fa fa-bars"></i>
                    </div>
            </div>
        </nav>

        <section class="home" id="home">
            <div class="max-width">
                <div class="home-content">
                    <div class="text-1">
                        Hola, mi nombre es
                    </div>
                    <div class="text-2">
                        Darwin Sierra
                    </div>
                    <div class="text-3">
                    Y soy un <span>Developer Frontend</span>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="about" id="about">
            <div class="max-width">
                <h2 class="title">Sobre mi</h2>
                <div class="about-content">
                    <div class="column left">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/me1.jpeg`}/>
                    </div>
                    <div class="column right">
                        <div class="text">Soy Darwin y soy un <span>Dev. FontEnd</span></div>
                        <p>Soy una persona autodidacta, Graduado T.S.U en Informática, aun estoy muy interesado en aprender nuevas tecnologías como nuevos lenguajes de programación, patrones de diseño, networking, entre otros.

                        Actualmente trabajo como Desarrollador Frontend freelancer, y estoy buscando una oportunidad en un nuevo
                        ambiente laboral estable.</p>
                        {/* <a href="#">Download CV</a> */}
                    </div>
                </div>
            </div>
        </section>

        <Skills/>


        
            <Jobs/>
        
        
        <section class="contact" id="contact">
            <div class="max-width">
                <h2 class="title">Contactame</h2>
            <div class="contact-content">
                <div class="column left">
                    <div class="icons">
                        <div class="row">
                            <i class="fa fa-user"></i>
                            <div class="info">
                                <div class="head">Name</div>
                                <div class="sub-title">Darwin Sierra.</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fa fa-map-marker"></i>
                            <div class="info">
                                <div class="head">Address</div>
                                <div class="sub-title">Buenos Aires/ Argentina</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fa fa-envelope"></i>
                            <div class="info">
                                <div class="head">Email</div>
                                <div class="sub-title">Dscontact.24@gmail.com</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fa fa-linkedin-square"></i>
                            <div class="info">
                                <div class="head">linkedin</div>
                                <div class="sub-title">https://www.linkedin.com/in/darwinsierra/</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column right">
                    
                </div>
            </div>
            </div>
        </section>
 
        <footer>
            <span>Created By <a href="#">DarwinSierra</a> | <span class="far fa-copyright"></span>2021 All rights reserved.</span>
        </footer>
        </>
        )
};

export default homePageContainer;