import { useState, useEffect } from "react";

export default function useInfiniteScroll<T>(itemsList: T[], pageSize = 50) {
  const [count, setCount] = useState({
    prev: 0,
    next: pageSize,
  });
  const [hasMore, setHasMore] = useState(true);
  const [current, setCurrent] = useState(
    itemsList.slice(count.prev, count.next)
  );

  useEffect(() => {
    setHasMore(true);
    setCount({
      prev: 0,
      next: pageSize,
    });
    setCurrent(itemsList.slice(0, pageSize));
  }, [itemsList]);

  const getMoreData = () => {
    if (current.length === itemsList.length) {
      setHasMore(false);
      return;
    }
    setCurrent(
      current.concat(
        itemsList.slice(count.prev + pageSize, count.next + pageSize)
      )
    );
    setCount((prevState) => ({
      prev: prevState.prev + pageSize,
      next: prevState.next + pageSize,
    }));
  };

  return {
    hasMore,
    getMoreData,
    current,
  };
}
