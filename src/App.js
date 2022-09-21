import logo from './logo.svg';
import './App.css';
import MessagesList from './Components/MessageList';
import AddMessage from './Components/AddMessage';

function App() {
  return (
    <div id="container">
      <section id="main">
        <MessagesList />
        <AddMessage />
      </section>
    </div>
  
  );
}

export default App;
