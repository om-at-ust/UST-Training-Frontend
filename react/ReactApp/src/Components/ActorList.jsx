import { createContext, useContext } from "react";
import ActorItem from "./ActorItem";

const ActorContext = createContext();

function ActorList() {
  let allActors = [
    {
      actorId: 101,
      actorFirstName: "Abel",
      actorLastName: "Mathew",
    },
    {
      actorId: 102,
      actorFirstName: "Om",
      actorLastName: "Dubey",
    },
    {
      actorId: 103,
      actorFirstName: "Chethan",
      actorLastName: "RD",
    },
    {
      actorId: 104,
      actorFirstName: "Shreya",
      actorLastName: "BS",
    },
  ];

  return (
    <>
      <h3>List of actors</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>FirstName</th>
            <th>LastName</th>
          </tr>
        </thead>
        <tbody>
          <ActorContext.Provider value={allActors}>
            <ActorItem />
          </ActorContext.Provider>
        </tbody>
      </table>
    </>
  );
}

export default ActorList;
export { ActorContext };
