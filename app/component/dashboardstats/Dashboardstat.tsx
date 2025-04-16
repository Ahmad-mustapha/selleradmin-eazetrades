import React from 'react';
// Import desired icons (choose suitable ones from react-icons)
import { HiArrowTrendingUp } from 'react-icons/hi2'; // Example using Heroicons 2
import { HiCube } from "react-icons/hi2";
import { MdPeopleAlt } from "react-icons/md";

// Define the structure for each card's data
interface StatCardData {
  id: number;
  title: string;
  value: string | number; // Use string if you need formatting like commas
  icon: React.ElementType;
  iconBgColor: string; // Tailwind class for icon background
  iconTextColor: string; // Tailwind class for icon text color
  trendPercentage: number;
  trendText: string;
//   lineColor: string; // Tailwind class for the decorative line
  trendColor: string; // Tailwind class for trend icon and text
}

// Sample data matching the image
const statsData: StatCardData[] = [
  {
    id: 1,
    title: 'Total Visitors',
    value: 489,
    icon: MdPeopleAlt,
    iconBgColor: 'bg-purple-100',
    iconTextColor: 'text-purple-600',
    trendPercentage: 8.5,
    trendText: 'Up from yesterday',
    // lineColor: '#5F3AFB',
    trendColor: 'text-teal-600', // Or text-green-600
  },
  {
    id: 2,
    title: "Today's Visitors",
    value: 100,
    icon: HiCube, // Using Cube as placeholder for the yellow icon
    iconBgColor: 'bg-yellow-100',
    iconTextColor: 'text-yellow-600',
    trendPercentage: 1.3,
    trendText: 'Up from past week',
    // lineColor: '#5F3AFB', // Same line color in example
    trendColor: 'text-teal-600', // Or text-green-600
  },
  // Add more data objects here if needed
];

const StatsOverview: React.FC = () => {
  return (
    <div
      className="relative p-6 rounded-[30px] bg-purple-50 bg-no-repeat seller-bg bg-right"
    >
      {/* Grid to hold the cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {statsData.map((stat) => (
          <div
            key={stat.id}
            className="relative bg-white rounded-xl shadow-sm p-5 pl-8 flex flex-col gap-3" // Added pl for line space, flex setup
          >
            {/* Decorative Vertical Line */}
            <div
              className={`absolute left-4 top-6 bottom-5 w-[2px] h-16 bg-[#5F3AFB] rounded-full`}
            ></div>

            {/* Card Header: Title and Icon */}
            <div className="flex justify-between items-center">
              <p className="text-gray-500 font-medium">{stat.title}</p>
              <div className={`p-2 rounded-full ${stat.iconBgColor}`}>
                <stat.icon className={`w-5 h-5 ${stat.iconTextColor}`} />
              </div>
            </div>

            {/* Card Value */}
            <p className="text-3xl font-bold text-gray-800">{stat.value}</p>

            {/* Card Trend Info */}
            <div className="flex items-center gap-1.5 text-sm mt-1">
              <HiArrowTrendingUp className={`w-4 h-4 ${stat.trendColor}`} />
              <span className={`font-semibold ${stat.trendColor}`}>
                {stat.trendPercentage}%
              </span>
              <span className="text-gray-500">{stat.trendText}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsOverview;