import React, { useEffect, useState } from "react";
import { PieChart, Pie, Sector, Cell, Legend, ResponsiveContainer } from "recharts";

const COLORS = ["#FFF9E8", "#F6D3D6", "#CE2430", "#205613"];

const EventTechnology = ({ events }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(() => getData());
  }, [events]);
  const getData = () => {
      const technologies = [
        "React",
        "JavaScript",
        "Node",
        "jQuery",
        "AngularJS",
      ];
      const data = technologies.map((technology) => {
        const value = events.filter(({ summary }) => 
        summary.split(" ").includes(technology)).length;
        return { name: technology, value };
      });
      return data;
  };

  return (
    <ResponsiveContainer height={400}>
      <PieChart height={400} padding={"20%"}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} name={entry.name} />
          ))}
        </Pie>
        <Legend verticalAlign="bottom" width={"80%"} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#232321', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px', verticalAlign: "bottom" }} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventTechnology;
