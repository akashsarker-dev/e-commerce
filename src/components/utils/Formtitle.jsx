import React from 'react';

export default function FormTitle({ title, className }) {
  return (
    <div>
      <h2 className={`font-bold text-primary text-[40px] ${className}`}>{title}</h2>
    </div>
  );
}
