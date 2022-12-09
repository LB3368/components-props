import ListItem from "./ListItem";
import EmployeeData from "../data";

const employees = EmployeeData.map((ele, index) => {
  return <ListItem key={index} {...ele} />;
});
export default function EmployeeList(props) {
  return (
    <div>
      <section className="lists">{employees}</section>
    </div>
  );
}
