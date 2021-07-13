import { useState, useCallback, useMemo, useEffect } from 'react';

export function useIterator(items = [], showItems = 5) {
  const [i, setIndex] = useState(0);
  const [j, setJIndex] = useState(0);
  const remaingingRepos = items.slice(j);
  useEffect(() => {
    setIndex(0);
    setJIndex(0);
    remaingingRepos.length > showItems
      ? setJIndex(showItems)
      : setJIndex(remaingingRepos.length);
  }, [items]);
  ///////////////////////////////////////
  const prev = useCallback(() => {
    if (i !== 0 && j !== items.length) {
      const newI = i - showItems;
      const newJ = j - showItems;
      setIndex(newI);
      setJIndex(newJ);
      return;
    }
    if (i !== 0 && j === items.length) {
      const newI = i - showItems;
      const newJ = j - (j - i);
      setIndex(newI);
      setJIndex(newJ);
      return;
    }
    if (i === 0) {
      const remainder = items.length % showItems;
      const newJ = items.length;
      const newI = remainder === 0 ? newJ - showItems : newJ - remainder;
      setIndex(newI);
      setJIndex(newJ);
      return;
    }
  }, [i, j]);
  ///////////////////////////////////////////
  const next = useCallback(() => {
    //When we reach the end of the list, we need to initialize.
    if (j === items.length && items.length < showItems) {
      setIndex(0);
      setJIndex(items.length);
      return;
    }
    if (j === items.length && items.length > showItems) {
      setIndex(0);
      setJIndex(showItems);
      return;
    }
    //when there are items in remaingingRepos and more than show items
    if (remaingingRepos.length > showItems) {
      const newI = i + showItems;
      const newJ = j + showItems;
      setIndex(newI);
      setJIndex(newJ);

      return;
    }
    //when there are items in remaingingRepos but <= show items
    const newI = i + showItems;
    setIndex(newI);
    setJIndex(items.length);
  }, [i, j]);

  const currentItems = useMemo(() => items.slice(i, j), [i, j, items]);
  return [currentItems || [{ name: 'No Repo Available' }], prev, next, i, j];
}
