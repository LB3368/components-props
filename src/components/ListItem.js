export default function ListItem({ name, title, img }) {
  return (
    <div className="employee">
      <img src={img} className="list-img" alt={img} />
      <div className="content">
        <h5 className="list-name">{name}</h5>
        <p className="list-title">{title}</p>
      </div>
    </div>
  );
}
