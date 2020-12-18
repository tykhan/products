import { ItemsList } from './components/ItemsList/ItemsList';
import { Header } from './components/Header/Header';
import { NewItemForm } from './components/NewItemForm/NewItemForm';
import './App.scss';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <NewItemForm />
        <ItemsList />
      </main>
    </>
  );
}

export default App;

