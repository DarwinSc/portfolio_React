import CardComponent from './components/card'
const jobs = () => {
    return (
      <>
        <section class="jobs" id="jobs">
          <div class="max-width">
            <h2 class="title">Mis Trabajos</h2>
              <div class="jobs-content">

                    <CardComponent 
                    icon="truck"
                    title="Via-Cargo"
                    text="Cotizador"
                    />

                    <CardComponent
                      icon="car"
                    title="Carok"
                    text="Componentes"
                    />


              </div>
            </div>
        </section>
      </>
    )
}

export default jobs;
