import type { NextPage } from "next";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loading, useInput } from "@nextui-org/react";
import { useDebounce } from "usehooks-ts";
import React, { useMemo } from "react";

import type { User } from "@entities/user";
import useInfiniteScroll from "@hooks/useInfiniteScroll";
import UserCard from "@components/UserCard";
import { getUsers } from "@services/users";

import * as Styled from "./index.styled";

const includesString = (checkedStr: string, includeStr: string) =>
  checkedStr.toLowerCase().includes(includeStr.toLowerCase());

type HomePageProps = {
  users: User[];
};

const HomePage: NextPage<HomePageProps> = ({ users }) => {
  const { value: input, setValue: setInput } = useInput("");
  const debouncedInput = useDebounce<string>(input, 500);

  const filteredUsers: User[] = useMemo(
    () =>
      users?.filter(
        ({ firstName, lastName }: User) =>
          includesString(firstName, input) || includesString(lastName, input)
      ) || [],
    [users, debouncedInput]
  );

  const {
    hasMore: hasMoreUsers,
    getMoreData: getMoreUsers,
    current: currentScrolledUsers,
  } = useInfiniteScroll<User>(filteredUsers, 20);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  return (
    <Styled.PageContainer>
      <Styled.SearchBarCard>
        <Styled.SearchBarCardBody>
          <Styled.User
            src="https://support.upwork.com/hc/article_attachments/360040474034/chatbot-data.png"
            name="Favbot"
          />
          <Styled.SearchBarInput
            onChange={handleInputChange}
            placeholder="User's name"
            contentRight={input !== debouncedInput && <Loading size="xs" />}
          />
        </Styled.SearchBarCardBody>
      </Styled.SearchBarCard>
      <Styled.UsersListCard>
        <InfiniteScroll
          dataLength={currentScrolledUsers.length}
          next={getMoreUsers}
          hasMore={hasMoreUsers}
          loader={null}
          height={`calc(100vh - 170px)`}
          scrollableTarget="users-scrollbar"
        >
          <Styled.UsersListCardBody>
            {currentScrolledUsers?.map(({ id, ...userData }: User) => (
              <React.Fragment key={id}>
                <UserCard {...userData} />
              </React.Fragment>
            )) || <Loading />}
          </Styled.UsersListCardBody>
        </InfiniteScroll>
      </Styled.UsersListCard>
    </Styled.PageContainer>
  );
};

export const getServerSideProps = async () => {
  const users = await getUsers();

  return {
    props: { users },
  };
};

export default HomePage;
