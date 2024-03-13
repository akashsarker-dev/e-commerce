import React from 'react'
import { useLocation } from 'react-router-dom';

export default function Pagetitle() {
  const location = useLocation();
  var pathArray = location.pathname.split("/").slice(1);
  var capitalizedArray = pathArray.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return (
    <div>
        <h2 className="font-bold text-[49px] text-primary">
          {capitalizedArray}
        </h2>
    </div>
  )
}
