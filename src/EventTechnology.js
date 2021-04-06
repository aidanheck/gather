import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

const COLORS = ["#FFF9E8", "#F6D3D6", "#CE2430", "#3A702D", "#E0B234"];

const EventTechnology = ({ events }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(() => getData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [events]);
  const getData = () => {
    const technologies = ["React", "JavaScript", "Node", "jQuery", "AngularJS"];
    const data = technologies.map((technology) => {
      const value = events.filter(({ summary }) =>
        summary.split(" ").includes(technology)
      ).length;
      return { name: technology, value };
    });
    return data;
  };

  return (
    <ResponsiveContainer height={400}>
      <PieChart align="center" height={400} padding={"5%"}>
        <Pie
          stroke="none"
          data={data}
          // cx={400}
          cy={125}
          labelLine={false}
          innerRadius={80}
          outerRadius={90}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              name={entry.name}
            />
          ))}
        </Pie>
        <Legend
          layout="vertical"
          iconType="circle"
          iconSize="8"
          verticalAlign="bottom"
          width={"90%"}
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)}%`
          }
          wrapperStyle={{
            bottom: 20,
            left: 25,
            borderRadius: 3,
            lineHeight: "30px",
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventTechnology;
