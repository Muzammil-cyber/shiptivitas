import Card from "./Card";
import "./Swimlane.css";

export default function Swimlane(props) {
  const cards = props.clients.map((client) => {
    return (
      <Card
        key={client.id}
        id={client.id}
        name={client.name}
        description={client.description}
        status={client.status}
      />
    );
  });

  return (
    <div className="Swimlane-column">
      <div className="Swimlane-title">{props.name}</div>
      <div className="Swimlane-dragColumn" ref={props.dragulaRef} aria-label={props.name}>
        {cards}
      </div>
    </div>
  );
}
