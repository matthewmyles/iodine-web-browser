/* Copyright (c) 2021-2022 SnailDOS */

import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { ThemeProvider } from 'styled-components';

import { StyledApp, Colors, Color } from './style';
import store from '../../store';
import { Textfield } from '~/renderer/components/Textfield';
import { ipcRenderer } from 'electron';
import {
  BLUE_500,
  RED_500,
  PINK_500,
  PURPLE_500,
  DEEP_PURPLE_500,
  INDIGO_500,
  CYAN_500,
  LIGHT_BLUE_500,
  TEAL_500,
  GREEN_500,
  LIGHT_GREEN_500,
  LIME_500,
  YELLOW_500,
  AMBER_500,
  ORANGE_500,
  DEEP_ORANGE_500,
  LAVENDER_500,
  BLUE_GRAY_500,
  PEACH_500,
  CHARCOAL_500,
  CORAL_500,
  CHERRY_500,
  BABY_BLUE_500,
  HOT_PINK_500,
  SKY_BLUE_500,
  SAGE_500,
  APPLE_500,
  FOREST_GREEN_500,
  ISLAND_GREEN_500,
  BEIGE_500,
  TAN_500,
  MAROON_500,
} from '~/renderer/constants';
import { UIStyle } from '~/renderer/mixins/default-styles';

const onChange = (e: any) => {
  ipcRenderer.send(`edit-tabgroup-${store.windowId}`, {
    name: store.inputRef.current.value,
    id: store.tabGroupId,
  });
};

const onColorClick = (color: string) => () => {
  ipcRenderer.send(`edit-tabgroup-${store.windowId}`, {
    color,
    id: store.tabGroupId,
  });
};

export const App = observer(() => {
  return (
    <ThemeProvider theme={{ ...store.theme }}>
      <StyledApp>
        <UIStyle />
        <Textfield
          dark={store.theme['dialog.lightForeground']}
          placeholder="Name"
          style={{ width: '100%' }}
          onChange={onChange}
          ref={store.inputRef}
        />

        <Colors>
          {[
            RED_500,
            DEEP_ORANGE_500,
            ORANGE_500,
            AMBER_500,
            YELLOW_500,
            LIME_500,
            LIGHT_GREEN_500,
            GREEN_500,
            TEAL_500,
            LIGHT_BLUE_500,
            BLUE_500,
            CYAN_500,
            BLUE_GRAY_500,
            INDIGO_500,
            PURPLE_500,
            DEEP_PURPLE_500,
            PINK_500,
            LAVENDER_500,
            PEACH_500,
            CHARCOAL_500,
            CORAL_500,
            CHERRY_500,
            BABY_BLUE_500,
            HOT_PINK_500,
            SKY_BLUE_500,
            SAGE_500,
            APPLE_500,
            FOREST_GREEN_500,
            ISLAND_GREEN_500,
            BEIGE_500,
            TAN_500,
            MAROON_500,
          ].map((color, key) => (
            <Color
              color={color}
              onClick={onColorClick(color)}
              key={key}
            ></Color>
          ))}
        </Colors>
      </StyledApp>
    </ThemeProvider>
  );
});
