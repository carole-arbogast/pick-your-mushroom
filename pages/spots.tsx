import styled from "styled-components";

export function Spots() {
  return (
    <div>
      <h1>Mushroom spots</h1>
      <button>Walking distance</button>
      <button>In season</button>
      {/* TODO when clicking on a marker, display informatino about available mushrooms for that spot */}
      <GooogleMap></GooogleMap>
    </div>
  );
}

const GooogleMap = styled.div`
  width: 30em;
  height: 20em;
  background: lightblue;
`;

export default Spots;
