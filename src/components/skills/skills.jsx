import PorcentageComponents from './components/porcentage'
const skills = () => {
    return (
        <>
            <section class="skills" id="skills">
            <div class="max-width">
                <h2 class="title"> My Sklils </h2>
                <div class="skills-content">
                    <div class="column left">
                        <div class="text"> My creative skills & experiences.</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo nostrum, sequi nesciunt facere distinctio earum eaque architecto laboriosam ipsam. Optio id nostrum nihil iure est ex amet quidem, facilis ratione, eveniet quos vero? Unde eveniet sit vero iusto quisquam repellat illum nisi eum aliquam? Temporibus quia qui nulla ullam.</p>
                        <a href="#">Read more</a>
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
