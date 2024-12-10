import Contador from "./Components/Contador";
import Encabezado from "./Components/Hearder";
import PiePagina from "./Components/PiePagina";

function App() {
  return (
    <>
      <div>
        <Encabezado />
        <main>
          <Contador/>
          <p>Esta es una aplicación React con Vite en español.</p>
        </main>
        <PiePagina/>
      </div>
    </>
  );
}

export default App;
