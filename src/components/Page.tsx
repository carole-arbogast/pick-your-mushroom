import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

export function Page(props: Props) {
  const { children } = props;
  return (
    <FlexWrapper>
      <PageWrapper>{children}</PageWrapper>
    </FlexWrapper>
  );
}

const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const PageWrapper = styled.div`
  width: 85%;
`;

export default Page;
