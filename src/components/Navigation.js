import Header from "./Header";
import SearchBar from "./SearchBar";
import Employee from "./Employee";

export default function Navigation(props) {
  return (
    <div>
      <Header />
      <SearchBar />
      <Employee />
    </div>
  );
}
