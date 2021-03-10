import { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import FormCheck from "react-bootstrap/FormCheck";
import Container from "react-bootstrap/Container";
import moment from "moment";

function App() {
  useEffect(() => {
    fetch("https://randomuser.me/api?results=10")
      .then((res) => res.json())
      .then((json) => json.results)
      .then((people) => people.map((person) => person.name.first))
      .then((names) => console.log(names));
  }, []);

  return (
    <Container>
      <h1 className="text-center">Beacon House School System</h1>
      <h3 className="text-center">Attendance Roster</h3>

      <Table>
        <thead>
          <tr>
            <td>Name</td>
            {}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>
              <FormCheck />
            </td>
            <td>
              <FormCheck />
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default App;
