import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {ParsingProps} from '../lib/TypeData/cardMenu.type';
import {fetchData} from '../redux/fetching';

type Item = {
  id: number;
  name: string;
  tags: ParsingProps;
};

type GroupData = {
  [tagName: string]: {
    name: string;
    items: Item[];
  };
};

const GroupBydata = () => {
  const [groupedData, setGroupedData] = useState<GroupData>({});
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const {data, isLoading, error} = useSelector((state: any) => state.data);

  useEffect(() => {
    dispatch(fetchData);
  }, [dispatch]);

  useEffect(() => {
    const newData: GroupData = {};

    data.forEach((item: any) => {
      item.tag_list.forEach((tag: any) => {
        if (!newData[tag]) {
          newData[tag] = {name: tag, items: []};
        }
        newData[tag].items.push(item);
      });
    });

    setGroupedData(newData);
  }, [data]);

  return {groupedData, error};
};

export default GroupBydata;
