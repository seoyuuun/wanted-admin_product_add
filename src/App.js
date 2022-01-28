import './App.css';
import Sidebar from 'components/layout/sidebar/Sidebar';
import Navbar from 'components/layout/navbar/Navbar';
import Admin from 'pages/admin';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Admin />
      <Sidebar />
    </div>
  );
}

export default App;
