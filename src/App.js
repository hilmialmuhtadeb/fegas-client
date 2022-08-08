import AppRoutes from "./routes";
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cafes">Cafe</Link>
      </nav>
      <AppRoutes />
    </div>
  );
}

export default App;
