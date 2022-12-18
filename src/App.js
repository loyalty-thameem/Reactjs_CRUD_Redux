import "bootstrap/dist/css/bootstrap.min.css";
import { Todolist } from "./Todolist";

export default function App() {
  return (
    <div className=" px-5 py-3 d-flex flex-column justify-content-center">
      <Todolist />
    </div>
  );
}
