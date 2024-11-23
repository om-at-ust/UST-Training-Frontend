import { useContext } from "react";
import { ActorContext } from "./ActorList";

function ActorItem() {
  let allActors = useContext(ActorContext);
  return (
    <>
      {allActors.map((actor) => {
        return (
          <>
            <tr>
              <td>{actor.actorId}</td>
              <td>{actor.actorFirstName}</td>
              <td>{actor.actorLastName}</td>
            </tr>
          </>
        );
      })}
    </>
  );
}

export default ActorItem;
