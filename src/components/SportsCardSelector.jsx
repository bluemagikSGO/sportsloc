import React, { useState } from "react";

const SportsCardSelector = () => {
  const [selectedSport, setSelectedSport] = useState(null);

  const sports = [
    {
      id: "football",
      name: "Football",
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          <rect
            x="10"
            y="20"
            width="80"
            height="50"
            rx="8"
            fill="#4ade80"
            stroke="#1e40af"
            strokeWidth="3"
          />
          <circle
            cx="50"
            cy="45"
            r="15"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <line
            x1="50"
            y1="20"
            x2="50"
            y2="70"
            stroke="white"
            strokeWidth="2"
          />
          <line
            x1="10"
            y1="45"
            x2="90"
            y2="45"
            stroke="white"
            strokeWidth="2"
          />
          <rect
            x="10"
            y="35"
            width="15"
            height="20"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <rect
            x="75"
            y="35"
            width="15"
            height="20"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      id: "basketball",
      name: "Basketball",
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          <rect
            x="15"
            y="10"
            width="70"
            height="80"
            rx="8"
            fill="#f97316"
            stroke="#1e40af"
            strokeWidth="3"
          />
          <rect
            x="40"
            y="15"
            width="20"
            height="15"
            fill="white"
            stroke="#1e40af"
            strokeWidth="2"
          />
          <circle
            cx="50"
            cy="75"
            r="8"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M42 75 L50 67 L58 75"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <line
            x1="35"
            y1="60"
            x2="65"
            y2="60"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      id: "tennis",
      name: "Lawn Tennis",
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          <rect
            x="15"
            y="20"
            width="70"
            height="50"
            rx="8"
            fill="#10b981"
            stroke="#1e40af"
            strokeWidth="3"
          />
          <line
            x1="15"
            y1="45"
            x2="85"
            y2="45"
            stroke="white"
            strokeWidth="1"
          />
          <circle cx="30" cy="35" r="3" fill="#fbbf24" />
          <rect x="45" y="42" width="10" height="6" fill="white" />
          <line
            x1="20"
            y1="25"
            x2="80"
            y2="25"
            stroke="white"
            strokeWidth="1"
          />
          <line
            x1="20"
            y1="65"
            x2="80"
            y2="65"
            stroke="white"
            strokeWidth="1"
          />
        </svg>
      ),
    },
    {
      id: "tabletennis",
      name: "Table Tennis",
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          <rect
            x="10"
            y="35"
            width="80"
            height="30"
            rx="4"
            fill="#3b82f6"
            stroke="#1e40af"
            strokeWidth="3"
          />
          <line
            x1="50"
            y1="35"
            x2="50"
            y2="65"
            stroke="white"
            strokeWidth="2"
          />
          <circle cx="25" cy="25" r="4" fill="#fbbf24" />
          <ellipse
            cx="35"
            cy="20"
            rx="8"
            ry="3"
            fill="#dc2626"
            stroke="#1e40af"
            strokeWidth="2"
          />
          <line
            x1="35"
            y1="23"
            x2="25"
            y2="29"
            stroke="#7c2d12"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      id: "snooker",
      name: "Snooker/Pool",
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          <rect
            x="10"
            y="25"
            width="80"
            height="50"
            rx="8"
            fill="#10b981"
            stroke="#1e40af"
            strokeWidth="3"
          />
          <circle cx="30" cy="40" r="4" fill="white" />
          <circle cx="45" cy="50" r="4" fill="#dc2626" />
          <circle cx="60" cy="45" r="4" fill="#fbbf24" />
          <circle cx="70" cy="55" r="4" fill="#000000" />
          <circle cx="25" cy="60" r="2" fill="#8b4513" />
          <circle cx="75" cy="60" r="2" fill="#8b4513" />
        </svg>
      ),
    },
    {
      id: "swimming",
      name: "Swimming",
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          <rect
            x="10"
            y="20"
            width="80"
            height="60"
            rx="8"
            fill="#06b6d4"
            stroke="#1e40af"
            strokeWidth="3"
          />
          <circle cx="30" cy="35" r="6" fill="white" />
          <circle cx="27" cy="33" r="2" fill="#1e40af" />
          <path
            d="M24 45 Q30 40 36 45 Q42 50 48 45"
            fill="none"
            stroke="white"
            strokeWidth="3"
          />
          <path
            d="M20 55 Q30 52 40 55 Q50 58 60 55 Q70 52 80 55"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M15 65 Q25 62 35 65 Q45 68 55 65 Q65 62 75 65 Q80 66 85 65"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      id: "badminton",
      name: "Badminton",
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          <rect
            x="15"
            y="20"
            width="70"
            height="50"
            rx="8"
            fill="#f59e0b"
            stroke="#1e40af"
            strokeWidth="3"
          />
          <line
            x1="50"
            y1="20"
            x2="50"
            y2="70"
            stroke="white"
            strokeWidth="2"
          />
          <circle cx="35" cy="35" r="3" fill="white" />
          <ellipse
            cx="25"
            cy="25"
            rx="6"
            ry="3"
            fill="#10b981"
            stroke="#1e40af"
            strokeWidth="2"
          />
          <line
            x1="25"
            y1="28"
            x2="35"
            y2="38"
            stroke="#7c2d12"
            strokeWidth="2"
          />
          <path
            d="M20 60 L30 55 L35 60 L40 55 L50 60 L60 55 L70 60 L80 55"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      id: "boxing",
      name: "Boxing",
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          <rect
            x="15"
            y="25"
            width="70"
            height="50"
            rx="8"
            fill="#dc2626"
            stroke="#1e40af"
            strokeWidth="3"
          />
          <circle
            cx="35"
            cy="40"
            r="8"
            fill="#fbbf24"
            stroke="#1e40af"
            strokeWidth="2"
          />
          <circle
            cx="65"
            cy="55"
            r="8"
            fill="#fbbf24"
            stroke="#1e40af"
            strokeWidth="2"
          />
          <rect x="30" y="35" width="10" height="10" fill="#7c2d12" />
          <rect x="60" y="50" width="10" height="10" fill="#7c2d12" />
          <path
            d="M45 45 Q50 40 55 45"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      id: "chess",
      name: "Chess",
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          <rect
            x="15"
            y="20"
            width="70"
            height="60"
            rx="8"
            fill="#f3f4f6"
            stroke="#1e40af"
            strokeWidth="3"
          />
          <g>
            {[0, 1, 2, 3].map((row) =>
              [0, 1, 2, 3].map((col) => (
                <rect
                  key={`${row}-${col}`}
                  x={25 + col * 12.5}
                  y={30 + row * 12.5}
                  width="12.5"
                  height="12.5"
                  fill={(row + col) % 2 === 0 ? "#000000" : "#ffffff"}
                />
              ))
            )}
          </g>
          <path
            d="M35 35 L40 30 L45 35 M40 32 L40 40"
            fill="none"
            stroke="#dc2626"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      id: "others",
      name: "Others",
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          <rect
            x="15"
            y="20"
            width="70"
            height="60"
            rx="8"
            fill="#6b7280"
            stroke="#1e40af"
            strokeWidth="3"
          />
          <circle cx="35" cy="40" r="3" fill="white" />
          <circle cx="50" cy="40" r="3" fill="white" />
          <circle cx="65" cy="40" r="3" fill="white" />
          <text
            x="50"
            y="65"
            textAnchor="middle"
            fill="white"
            fontSize="12"
            fontWeight="bold"
          >
            +
          </text>
        </svg>
      ),
    },
  ];

  const handleCardClick = (sport) => {
    setSelectedSport(selectedSport === sport.id ? null : sport.id);
  };

  return (
    <div
      className="max-w-6xl mx-auto p-6 mt-[5rem]"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        Select Your Sport
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {sports.map((sport) => (
          <div
            key={sport.id}
            onClick={() => handleCardClick(sport)}
            className={`
              relative cursor-pointer transition-all duration-300 transform hover:scale-105
              ${
                selectedSport === sport.id
                  ? "ring-4 ring-blue-500 ring-opacity-60 shadow-lg"
                  : "hover:shadow-md"
              }
            `}
          >
            <div className="bg-blue-100 rounded-full p-4 aspect-square flex flex-col items-center justify-center">
              <div className="mb-3">{sport.icon}</div>
              <h3 className="text-sm font-semibold text-gray-800 text-center leading-tight">
                {sport.name}
              </h3>
            </div>

            {selectedSport === sport.id && (
              <div className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedSport && (
        <div className="mt-8 p-4 bg-blue-50 rounded-lg text-center">
          <p className="text-lg font-medium text-blue-800">
            You selected:{" "}
            <span className="font-bold">
              {sports.find((s) => s.id === selectedSport)?.name}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default SportsCardSelector;
