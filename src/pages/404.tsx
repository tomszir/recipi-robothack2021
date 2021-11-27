import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function NotFound() {
  return (
    <Container>
      <div>
        <h1>404 | Page Not Found</h1>
        <Link to="/">Back to reality</Link>
      </div>
    </Container>
  );
}
