import { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  useEffect(() => {
    fetch("https://randomuser.me/api?results=10")
      .then((res) => res.json())
      .then((json) => json.results)
      .then((people) => people.map((person) => person.name.first))
      .then((names) => console.log(names));
  }, []);

  return (
    <div>
      <h1 className="text-center">Beacon House School System</h1>
      <h3 className="text-center">Attendance Roster</h3>
    </div>
  );
}

export default App;
