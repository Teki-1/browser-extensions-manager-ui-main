import "./styles.css";

export default function Filter() {
  return (
    <div className="title-box">
      <h1 className="above">Extensions List</h1>
      <button className="filter">Inactive</button>
      <button className="filter">Active</button>
      <button className="filter">All</button>
    </div>
  );
}
