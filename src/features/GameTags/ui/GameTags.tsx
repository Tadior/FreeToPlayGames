import cls from './GameTags.module.css';
import { Checkbox } from 'antd';
import type { MenuProps } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { TAGS } from '@/shared/consts/tags';
import { gameApi, useGetGamesQuery } from '@/shared/api/gameApi';
import { SyntheticEvent, useEffect, useState } from 'react';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';

export const GameTags = () => {
  const [tagsState, setTagsState] = useState<string>(TAGS[0]);
  const [sortState, setSortState] = useState<string>('');

  const { data, isLoading, error } = gameApi.useGetGamesQuery({
    category: tagsState,
    ['sort-by']: sortState,
  });
  console.log(data);
  const handleMenu: MenuProps['onClick'] = (e) => {
    setTagsState(e.key);
    setSortState('alphabetical');
  };

  const items: MenuProps['items'] = TAGS.map((tag) => {
    return {
      label: tag,
      key: tag,
    };
  });

  const menuProps = {
    items,
    onClick: handleMenu,
  };

  return (
    <div className={cls.GameTags}>
      <Dropdown.Button onClick={handleMenu} menu={menuProps}>{tagsState}</Dropdown.Button>
      {/*{TAGS.map((tag) => {*/}
      {/*  return (*/}
      {/*      <Checkbox key={tag} name={tag} className={cls.Tag} onChange={handleClick}>{tag}</Checkbox>*/}
      {/*  )*/}
      {/*})}*/}
    </div>
  );
};
