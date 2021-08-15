import React from 'react';

export default function Link(props) {
  return (
    <li className='tooltip'>
      <a href={props.href}>
        <img src={props.iconLocation} alt='' />
        <div className='tooltiptext'>{props.linkName}</div>
      </a>
    </li>
  );
}
