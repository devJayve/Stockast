import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { select } from 'd3';

const LineGraph = () => {
  const [data, setData] = useState([24, 30, 45, 80, 25]);
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = select(svgRef.current);

    svg
      .selectAll('circle')
      .data(data)
      .join(
        (enter) => enter.append('circle'),
        (update) => update.attr('class', 'updated'),
        (exit) => exit.remove()
      )
      .attr('r', (value) => value)
      .attr('cx', (value) => value * 2)
      .attr('cy', (value) => value * 2)
      .attr('stroke', 'red');
  }, [data]);

  return (
    <div>
      <svg ref={svgRef}>
        {data.map((el, i) => (
          <circle key={i}>{el}</circle>
        ))}
      </svg>
      <button
        onClick={() => {
          setData(data.map((el) => el + 5));
        }}
      >
        increase
      </button>
      <button
        onClick={() => {
          setData(data.filter((el) => el > 35));
        }}
      >
        filter
      </button>
    </div>
  );
};

export default LineGraph;
