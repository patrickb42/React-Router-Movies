import React from 'react';
import { RouteChildrenProps } from 'react-router';
import { History } from 'history';

// HOC to impliment later
interface HistLinkProps {
  history: History;
  children: any | Element;
  dest: string;
}
const HistLink = ({ history, dest }: HistLinkProps) => {
  return (<div onClick={() => history.push(dest)} />);
};

export default HistLink;
