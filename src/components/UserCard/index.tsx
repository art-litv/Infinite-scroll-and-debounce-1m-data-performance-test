import React from "react";

import * as Styled from "./UserCard.styled";

type SocialLinks = {
  twitterUrl?: string;
  instagramUrl?: string;
  facebookUrl?: string;
};

type UserCardProps = {
  firstName: string;
  lastName: string;
  avatarUrl: string;
  socialLinks?: SocialLinks;
};

const UserCard: React.FC<UserCardProps> = ({
  firstName,
  lastName,
  avatarUrl,
  socialLinks,
}) => {
  const { twitterUrl, instagramUrl, facebookUrl } = socialLinks || {};

  return (
    <Styled.UserCard>
      <Styled.UserCardBody>
        <Styled.User src={avatarUrl} name={`${firstName} ${lastName}`} />
        <Styled.SocialIconsGroup>
          {twitterUrl && <Styled.TwitterIcon href={twitterUrl} />}
          {instagramUrl && <Styled.InstagramIcon href={instagramUrl} />}
          {facebookUrl && <Styled.FacebookIcon href={facebookUrl} />}
        </Styled.SocialIconsGroup>
      </Styled.UserCardBody>
    </Styled.UserCard>
  );
};

export default UserCard;
