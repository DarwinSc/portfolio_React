import PorcentageComponents from './components/porcentage'
const skills = () => {
    return (
        <>
            <section class="skills" id="skills">
            <div class="max-width">
                <h2 class="title"> Mis Habilidades </h2>
                <div class="skills-content">
                    <div class="column left">
                        <div class="text"> Mis habilidades y experiencias.</div>
                        <p>
                        </p>
                    
                    </div>
                    <div class="column right">

                        <PorcentageComponents
                            title="HTML5"
                            number="100"
                        />

                        <PorcentageComponents
                            title="CSS3"
                            number="90"
                        />

                        <PorcentageComponents
                            title="JavaScript"
                            number="80"
                        />

                        <PorcentageComponents
                            title="Reactjs"
                            number="70"
                        />

                        <PorcentageComponents
                            title="Nextjs"
                            number="40"
                        />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default skills
