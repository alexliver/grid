import { Link } from 'react-router-dom';

function App() {
  return (
    <div >
      <ul>
        <li> <Link  to="/users">users</Link> </li>
        <li> <Link  to="/products">products</Link> </li>
      </ul>
    </div>
  );
}

export default App;
