import React from 'react';
import UserAdder from '../components/UserAdder';

export default function AddPage() {
  return (
    <div>
      <UserAdder title={'Add User'} action={'add'} />
    </div>
  );
}
