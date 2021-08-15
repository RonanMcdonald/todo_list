import React from 'react';
import Task from './Task';

export default function todo() {
  const TASK_DATA = [{ name: 'bean 1' }, { name: 'bean 2' }, { name: 'bean 3' }];

  return (
    <div className='Todo_Container'>
      <h1>Tasks</h1>

      <div className='Input_Container'>
        <form action=''>
          <input type='text' name='' id='' />
        </form>
      </div>

      <div className='Output_Container'>
        <ul>
          <Task text={TASK_DATA[0].name}></Task>
        </ul>
      </div>
    </div>
  );
}
