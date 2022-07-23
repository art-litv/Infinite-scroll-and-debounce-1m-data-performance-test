import MuiInstagramIcon from "@mui/icons-material/Instagram";
import MuiFacebookIcon from "@mui/icons-material/Facebook";
import MuiTwitterIcon from "@mui/icons-material/Twitter";
import { Card, User as NextUIUser } from "@nextui-org/react";
import styled from "styled-components";

export const User = styled((props) => <NextUIUser size="md" {...props} />)``;

export const UserCard = styled((props) => (
  <Card isHoverable variant="bordered" {...props} />
))``;

export const UserCardBody = styled(Card.Body)`
  padding: 8px 12px 8px 4px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SocialIconsGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const SocialLink = styled.a`
  font-size: 24px;
  color: rgba(0, 0, 0, 0.4);
  display: flex;
  height: 24px;
`;

export const TwitterIcon = styled(({ href, ...props }) => (
  <SocialLink href={href} target="_blank">
    <MuiTwitterIcon {...props} />
  </SocialLink>
))``;

export const InstagramIcon = styled(({ href, ...props }) => (
  <SocialLink href={href} target="_blank">
    <MuiInstagramIcon {...props} />
  </SocialLink>
))``;

export const FacebookIcon = styled(({ href, ...props }) => (
  <SocialLink href={href} target="_blank">
    <MuiFacebookIcon {...props} />
  </SocialLink>
))``;
