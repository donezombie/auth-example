import logo from './logo.svg';
import './App.css';
import { useAuth } from 'app-launcher-auth';

function App() {
  const { isLogged, user, loginPopup, loading, logout } = useAuth();

  if (loading) {
    return <span>Loading...</span>
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span style={{ marginBottom: 12 }}>isLogged: {`${isLogged}`}</span>
        <div style={{ overflowWrap: 'anywhere', marginBottom: 12 }}>User: {JSON.stringify(user)}</div>

        {!isLogged && <button onClick={loginPopup}>Login</button>}
        {isLogged && <button onClick={logout}>Logout</button>}
      </header>
    </div>
  );
}

export default App;
