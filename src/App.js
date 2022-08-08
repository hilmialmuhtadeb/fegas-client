import AppRoutes from "./routes";
import Navbar from "./components/organisms/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="bg-gradient-to-b from-indigo-700 to-sky-700 pt-24 pb-32">
        <div className="container">
          <h2 className="py-8 text-2xl text-white font-semibold">Fegas, Temukan cafe buat nugas di kotamu!</h2>
        </div>
      </header>
      <AppRoutes />
    </div>
  );
}

export default App;
