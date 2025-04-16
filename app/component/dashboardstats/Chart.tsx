'use client'; // Required for Recharts hooks and event handlers

import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps, // Import TooltipProps type
} from 'recharts';

// Define the type for our data points
interface VisitData {
  name: string; // e.g., "1st", "2nd"
  visits: number;
}

// Sample data approximating the chart in the image
const data: VisitData[] = [
  { name: '1st', visits: 50 },
  { name: '2nd', visits: 75 },
  { name: '3rd', visits: 120 },
  { name: '4th', visits: 100 },
  { name: '5th', visits: 80 },
  { name: '6th', visits: 135 },
  { name: '7th', visits: 230 }, // Peak value from image tooltip
  { name: '8th', visits: 130 },
  { name: '9th', visits: 140 },
  { name: '10th', visits: 110 },
  { name: '11th', visits: 155 },
  { name: '12th', visits: 60 },
  { name: '13th', visits: 80 },
  { name: '14th', visits: 115 },
  { name: '15th', visits: 110 },
  { name: '16th', visits: 180 },
  { name: '17th', visits: 150 },
  { name: '18th', visits: 165 },
  { name: '19th', visits: 145 },
  { name: '20th', visits: 140 }, // Added a few more points for context
  { name: '21st', visits: 125 },
];

// Custom Tooltip Component for styling
const CustomTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-indigo-600 text-white px-3 py-1 rounded-md shadow-md text-xs font-medium">
        {/* Using payload[0].value as we only have one data series ('visits') */}
        <p>{`${payload[0].value} visits`}</p>
      </div>
    );
  }

  return null;
};


const ProfileVisitsChart: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold text-gray-800">Profile Visits</h2>
        <select className="flex items-center gap-1 px-3 py-1.5 border border-gray-200 rounded-md text-sm text-gray-600 hover:bg-gray-50">
         <option value=""> October</option>
         <option value=""> November</option>
        </select>
      </div>

      {/* Chart Container */}
      <div className="h-72 w-full"> {/* Set a specific height for the chart */}
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 10, // Adjusted margin slightly
              left: -25, // Adjusted left margin to bring Y-axis labels closer
              bottom: 0,
            }}
          >
            {/* Define gradient for the area fill */}
            <defs>
              <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                {/* Start with a lighter version of the line color */}
                <stop offset="5%" stopColor="#818CF8" stopOpacity={0.4}/> 
                {/* Fade to transparent */}
                <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.1}/>
              </linearGradient>
            </defs>

            {/* Grid Lines */}
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e5e7eb" // Tailwind gray-200
              vertical={false} // Only horizontal lines like the image
            />

            {/* X Axis (Days) */}
            <XAxis
              dataKey="name"
              axisLine={false} // Hide the axis line
              tickLine={false} // Hide the ticks markers
              tick={{ fontSize: 12, fill: '#6b7280' }} // Tailwind gray-500
              padding={{ left: 10, right: 10 }} // Add padding to axis ends
            />

            {/* Y Axis (Visit Count) */}
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6b7280' }} // Tailwind gray-500
              // Optional: Specify ticks explicitly if needed, e.g., ticks={[0, 50, 100, 150, 200, 250]}
              domain={[0, 260]} // Set domain slightly above max to match image's 250+ look
              tickCount={6} // Aim for roughly 6 ticks (0, 50, ..., 250)
            />

            {/* Tooltip */}
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#a78bfa', strokeWidth: 1, strokeDasharray: '3 3' }} />

            {/* Area Graph */}
            <Area
              type="monotone" // Smooth curve
              dataKey="visits"
              stroke="#6366F1" // Tailwind indigo-500
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorVisits)" // Use the defined gradient
              dot={{ stroke: '#6366F1', fill: '#6366F1', strokeWidth: 1, r: 3 }} // Style the points
              activeDot={{ r: 5, stroke: '#fff', strokeWidth: 2, fill: '#6366F1' }} // Style the active point on hover
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProfileVisitsChart;