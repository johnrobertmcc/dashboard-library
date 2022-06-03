import React from 'react';

interface HelloWorldProps {
  component?: string;
}

export default function HelloWorld({
  component = 'HelloWorld',
}: HelloWorldProps) {
  return <p>{component} component</p>;
}
