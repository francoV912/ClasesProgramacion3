import Dato from "./components/dato"
import Saludar from "./components/saludar"

export default App

function App (){
  return (
  <>
  <h1>Hola</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium provident, cumque non quos, laudantium vero quod voluptas distinctio culpa maiores, maxime enim hic exercitationem vitae officiis mollitia sit tempore est.</p>

  <Saludar nombre="Pomponio"/>
  <Dato>
    <h4>Direccion:</h4>
    <h5>Estado Civil:</h5>
    <p>Descripcion:</p>
  </Dato>
  </>
  )
};