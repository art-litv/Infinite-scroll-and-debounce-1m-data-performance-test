import { Card, Container, Input, User as NextUIUser } from "@nextui-org/react";
import styled from "styled-components";

import { breakpoints } from "../styles/breakpoints";

export const PageContainer = styled(Container)`
  width: 100%;

  ${breakpoints.upLg} {
    width: 700px;
  }
`;

export const SearchBarCard = styled(Card)`
  margin: 0 auto;
  margin-top: 20px;

  ${breakpoints.upLg} {
    margin-top: 40px;
  }
`;

export const User = styled((props) => <NextUIUser size="md" {...props} />)``;

export const SearchBarInput = styled((props) => (
  <Input fullWidth {...props} />
))``;

export const SearchBarCardBody = styled(Card.Body)`
  flex-direction: row;
  gap: 4px;

  ${breakpoints.upLg} {
    gap: 24px;
  }
`;

export const UsersListCard = styled(Card)`
  margin-top: 14px;

  .infinite-scroll-component {
    &::-webkit-scrollbar {
      width: 8px;
    }
  }

  .infinite-scroll-component::-webkit-scrollbar-track {
    background: transparent;
  }

  .infinite-scroll-component::-webkit-scrollbar-thumb {
    background-color: lightgray;
    border-radius: 4px;
  }
`;

export const UsersListCardBody = styled(Card.Body)`
  gap: 10px;
`;
