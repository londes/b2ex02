import './App.css';
import Name from './components/Name'
import Surname from './components/Surname';

function App() {
  return (
    <div className="App">
      <div>
        {fullnames.map((name, idx) => <div key={idx}><Name name={name[0]}/> <Surname surname={name[1]}/></div>)}
      </div>
    </div>
  );
}

let names = ["Clifford", "Russel", "Michael", "Dennis", "Andre"];
let surnames = ["Smith", "Simmons", "Diamond", "Coles", "Benjamin"];
let fullnames = names.map( (name,idx) => ([ name, surnames[idx] ]) )

export default App;
