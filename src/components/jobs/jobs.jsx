import CardComponent from './components/card'
const jobs = () => {
    return (
      <>
        <section class="jobs" id="jobs">
          <div class="max-width">
            <h2 class="title">My jobs</h2>
              <div class="jobs-content">

                    <CardComponent 
                    icon="truck"
                    title="Via-Cargo"
                    text="sdfgvujergore3"
                    />

                    <CardComponent
                      icon="car"
                    title="Carok"
                    text="sdfgvujergore3"
                    />


              </div>
            </div>
        </section>
      </>
    )
}

export default jobs;
