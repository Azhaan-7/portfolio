import { useId, useState } from "react";
import { venueArchitecture } from "../data/portfolio";

export default function ArchitecturePlate() {
  const [selected, setSelected] = useState("overview");
  const id = useId();
  const choices = [
    {
      id: "overview",
      label: "Overview",
      description:
        "Two application surfaces, two API paths and one shared Azure SQL persistence target. Select a path to inspect how the system fits together.",
    },
    ...venueArchitecture.map((lane) => ({
      id: lane.id,
      label: lane.protocol,
      description: lane.description,
    })),
    {
      id: "data",
      label: "Persistence",
      description:
        "Both APIs use TypeORM with a shared Azure SQL database for users, venues, applications and related records. The REST and GraphQL backends maintain their persistence code separately.",
    },
  ];
  return (
    <figure className="architecture" aria-labelledby={`${id}-title`}>
      <figcaption className="plate-caption">
        <span id={`${id}-title`}>
          Venue Vendors{" "}
          <span className="plate-caption-detail">/ System overview</span>
        </span>
        <span className="plate-mark" aria-hidden="true">
          <i />
          <i />
        </span>
      </figcaption>
      <div className="architecture-body">
        <div className="architecture-lanes">
          {venueArchitecture.map((lane) => (
            <div
              className={`architecture-lane ${selected === lane.id ? "is-selected" : ""}`}
              key={lane.id}
            >
              <p className="lane-audience">{lane.audience}</p>
              <div className="system-node">
                <strong>{lane.application}</strong>
                <span>Next.js / React</span>
              </div>
              <div className="system-connection">
                <span>
                  {lane.client} <b>· {lane.protocol}</b>
                </span>
                <i aria-hidden="true" />
              </div>
              <div className="system-node api-node">
                <strong>{lane.api}</strong>
                <span>
                  {lane.id === "admin" ? "Express · " : ""}
                  <code>{lane.endpoint}</code>
                </span>
              </div>
              <div className="persistence-connection">
                <span>TypeORM</span>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`persistence-node ${selected === "data" ? "is-selected" : ""}`}
        >
          <span className="database-symbol" aria-hidden="true" />
          <div>
            <strong>Azure SQL Database</strong>
            <span>Shared relational persistence</span>
          </div>
        </div>
      </div>
      <div className="plate-inspector">
        <div
          className="plate-controls"
          role="group"
          aria-label="Inspect the Venue Vendors architecture"
        >
          {choices.map((choice) => (
            <button
              type="button"
              key={choice.id}
              aria-pressed={selected === choice.id}
              aria-controls={`${id}-annotation`}
              onClick={() => setSelected(choice.id)}
            >
              {choice.label}
            </button>
          ))}
        </div>
        <p
          id={`${id}-annotation`}
          className="plate-annotation"
          aria-live="polite"
        >
          {choices.find((choice) => choice.id === selected)?.description}
        </p>
      </div>
      <details className="plate-text">
        <summary>Read the system description</summary>
        <p>
          Hirer or vendor → main Next.js / React application → Axios REST
          requests → Express API at /api → TypeORM → Azure SQL Database.
        </p>
        <p>
          Administrator → separate Next.js / React admin application → Apollo
          Client GraphQL requests → Apollo Server on Express at /graphql →
          TypeORM → Azure SQL Database.
        </p>
        <p>
          Connectors show request and persistence paths, not deployment
          infrastructure.
        </p>
      </details>
    </figure>
  );
}
