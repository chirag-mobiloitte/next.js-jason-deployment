import React, { useState, useEffect } from "react";

function LinearCircularProgressBar() {
  const [percentage, setPercentage] = useState(0);

  // Simulate progress over time (you can replace this with your logic)
  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prevPercentage) => {
        const newPercentage = prevPercentage + 1;
        return newPercentage > 100 ? 0 : newPercentage;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Calculate the path for the progress arc
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = ((100 - percentage) / 100) * circumference;

  return (
    <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
      <path
        stroke="black"
        strokeWidth="10"
        fill="transparent"
        d={`M 100 ${radius + 5} A ${radius} ${radius} 0 1 1 ${
          100 - progressOffset
        } ${radius + 5}`}
      />
    </svg>
  );
}

export default LinearCircularProgressBar;
