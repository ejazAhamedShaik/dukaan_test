import Link from "react-router-dom";
import {
  PageNotFoundContainer,
  PageNotFoundContent,
} from "./PageNotFound.styles";

export function PageNotFoundPage() {
  return (
    <PageNotFoundContainer>
      <PageNotFoundContent>
        <h1>Page Not Found</h1>
        <p>The page you requested could not be found.</p>
        <Link to="/payments">Go to Payments Page</Link>
      </PageNotFoundContent>
    </PageNotFoundContainer>
  );
}
