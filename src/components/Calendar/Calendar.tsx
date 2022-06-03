import React from 'react';

interface CalendarProps {
  component?: string;
  className: string;
}

export default function Calendar({
  component = 'Calendar',
  className,
}: CalendarProps) {
  return <p className={className}>{component} component</p>;
}

Calendar.defaultProps = {
  component: 'Calendar',
  className: 'underline',
};
