import { ErrorBoundary } from "react-error-boundary";
import Random from "../components/about/Random";
import StyledDiv from "../components/about/StyledDiv";
import { useOnlineStatus } from "../hooks/useOnlineStatus";
import FallbackErrorMessage from "../components/shared/FallbackErrorMessage";

const AboutPage = () => {
  const status = useOnlineStatus();
  console.log(status);

  return (
    <>
      <h1>About Page</h1>
      <p>A place to try out something!</p>
      <p>Am I Online?</p>
      <p>
        {status ? "✅ Wow! You are ONLINE" : "❌ Seems like you are OFFLINE"}
      </p>

      <StyledDiv>
        <p>Hello</p>
        <span>dfghjkln jhjkl</span>
      </StyledDiv>

      <StyledDiv>
        <p>How are you?</p>
      </StyledDiv>

      <StyledDiv>
        <p>Bye</p>
      </StyledDiv>

      <ErrorBoundary fallback={<FallbackErrorMessage />}>
        <Random x="10" />
      </ErrorBoundary>
    </>
  );
}

export default AboutPage