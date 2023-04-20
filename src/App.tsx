import React from 'react';
import List from './List';
import './App.css';
import './i18n';
import LanguageSwitch from './LanguageSwitch';

const App: React.FC = () => {
  return (
    <>
      <LanguageSwitch />
      <List />
    </>
  );
};

export default App;
