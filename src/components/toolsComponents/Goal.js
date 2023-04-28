import React from 'react';

export default function Goal({ goal }) {
  return (
    <div class="goal">
      <p>
        <strong>My Goal</strong> : {goal}
      </p>
    </div>
  );
}
