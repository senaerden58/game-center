import React from "react";

const GameBussIcon = ({ size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Otobüs gövdesi */}
    <rect
      x="6"
      y="20"
      width="52"
      height="26"
      rx="8"
      ry="8"
      fill="url(#busGradient)"
      stroke="#4ade80"
      strokeWidth="2"
    />
    {/* Ön cam */}
    <rect
      x="10"
      y="24"
      width="16"
      height="14"
      rx="3"
      ry="3"
      fill="#ffffffcc"
      stroke="#7873f5"
      strokeWidth="1"
    />
    {/* Yan kapılar */}
    <rect
      x="30"
      y="24"
      width="12"
      height="14"
      rx="3"
      ry="3"
      fill="#ffffff99"
      stroke="#7873f5"
      strokeWidth="1"
    />
    <rect
      x="44"
      y="24"
      width="10"
      height="14"
      rx="3"
      ry="3"
      fill="#ffffff99"
      stroke="#7873f5"
      strokeWidth="1"
    />
    {/* Tekerlekler */}
    <circle cx="18" cy="48" r="6" fill="#7873f5" />
    <circle cx="46" cy="48" r="6" fill="#7873f5" />

    <defs>
      <linearGradient
        id="busGradient"
        x1="0"
        y1="20"
        x2="64"
        y2="46"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#ff6ec4" />
        <stop offset="0.5" stopColor="#7873f5" />
        <stop offset="1" stopColor="#4ade80" />
      </linearGradient>
    </defs>
  </svg>
);

export default GameBussIcon;
