import AppRoutes from "./routes";
import Navbar from "./components/organisms/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="bg-sky-700 pt-20 pb-48">
        <div className="container">
          <h2 className="py-8 text-2xl text-white font-semibold">
            Fegas, Temukan cafe buat nugas di kotamu!
          </h2>
        </div>
      </header>
      <main>
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
