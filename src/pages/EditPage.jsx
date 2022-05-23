import React from 'react';
import UserAdder from '../components/UserAdder';

export default function EditPage() {
  return (
    <div>
      <UserAdder action={'Edit'} title={'Edit User'} />
    </div>
  );
}
