import * as React from 'react';
import { Appbar, Menu  } from 'react-native-paper';

export default function Header() {
    return (
      <Appbar.Header>
        <Appbar.Content title="To Do App" />
      </Appbar.Header>
    );
  }