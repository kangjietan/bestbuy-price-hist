import React from "react";
import { Header, Navigation } from "./styles";

const Navbar = () => {
  return (
    <Header>
      <Navigation>
        <svg
          width="157"
          height="82"
          viewBox="0 0 157 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.20711 0.302781C7.81658 -0.0877434 7.18342 -0.0877434 6.79289 0.302781L0.428932 6.66674C0.0384079 7.05727 0.0384079 7.69043 0.428932 8.08096C0.819456 8.47148 1.45262 8.47148 1.84315 8.08096L7.5 2.4241L13.1569 8.08096C13.5474 8.47148 14.1805 8.47148 14.5711 8.08096C14.9616 7.69043 14.9616 7.05727 14.5711 6.66674L8.20711 0.302781ZM8.5 76.0099L8.5 1.00989H6.5L6.5 76.0099H8.5Z"
            fill="black"
          />
          <path
            d="M157 75.5L147 69.7265V81.2735L157 75.5ZM7 76.5H148V74.5H7V76.5Z"
            fill="black"
          />
          <path
            d="M25.9304 55V19.672H38.6984C44.7784 19.672 47.8184 22.696 47.8184 28.744C47.8184 30.952 47.3224 32.728 46.3304 34.072C45.3704 35.416 44.2024 36.28 42.8264 36.664C43.6904 36.856 44.6024 37.272 45.5624 37.912C46.5224 38.52 47.3384 39.416 48.0104 40.6C48.7144 41.784 49.0664 43.32 49.0664 45.208C49.0664 47.736 48.6664 49.704 47.8664 51.112C47.0664 52.52 45.9304 53.528 44.4584 54.136C42.9864 54.712 41.2264 55 39.1784 55H25.9304ZM29.7704 35.32H38.9384C40.4424 35.32 41.6744 34.776 42.6344 33.688C43.6264 32.6 44.1384 31.128 44.1704 29.272C44.2344 27 43.7384 25.416 42.6824 24.52C41.6584 23.592 40.3304 23.128 38.6984 23.128H29.7704V35.32ZM29.7704 51.592H39.0824C40.3304 51.592 41.4344 51.4 42.3944 51.016C43.3544 50.6 44.0904 49.896 44.6024 48.904C45.1464 47.88 45.4184 46.44 45.4184 44.584C45.4184 42.6 44.7944 41.064 43.5464 39.976C42.3304 38.888 40.8424 38.344 39.0824 38.344H29.7704V51.592ZM54.8523 55V19.672H67.6203C73.7003 19.672 76.7403 22.696 76.7403 28.744C76.7403 30.952 76.2443 32.728 75.2523 34.072C74.2923 35.416 73.1243 36.28 71.7483 36.664C72.6123 36.856 73.5243 37.272 74.4843 37.912C75.4443 38.52 76.2603 39.416 76.9323 40.6C77.6363 41.784 77.9883 43.32 77.9883 45.208C77.9883 47.736 77.5883 49.704 76.7883 51.112C75.9883 52.52 74.8523 53.528 73.3803 54.136C71.9083 54.712 70.1483 55 68.1003 55H54.8523ZM58.6923 35.32H67.8603C69.3643 35.32 70.5963 34.776 71.5563 33.688C72.5483 32.6 73.0603 31.128 73.0923 29.272C73.1563 27 72.6603 25.416 71.6043 24.52C70.5803 23.592 69.2523 23.128 67.6203 23.128H58.6923V35.32ZM58.6923 51.592H68.0043C69.2523 51.592 70.3563 51.4 71.3163 51.016C72.2763 50.6 73.0123 49.896 73.5243 48.904C74.0683 47.88 74.3403 46.44 74.3403 44.584C74.3403 42.6 73.7163 41.064 72.4683 39.976C71.2523 38.888 69.7643 38.344 68.0043 38.344H58.6923V51.592ZM83.7741 55V19.672H97.8381C98.8621 19.672 99.9021 19.816 100.958 20.104C102.046 20.392 103.054 20.92 103.982 21.688C104.91 22.456 105.646 23.592 106.19 25.096C106.766 26.568 107.054 28.52 107.054 30.952C107.054 33.416 106.75 35.416 106.142 36.952C105.566 38.488 104.798 39.672 103.838 40.504C102.91 41.304 101.902 41.848 100.814 42.136C99.7261 42.424 98.6701 42.568 97.6461 42.568C97.1661 42.568 96.4621 42.552 95.5341 42.52C94.6061 42.488 93.6141 42.456 92.5581 42.424C91.5341 42.36 90.5741 42.296 89.6781 42.232C88.7821 42.168 88.0941 42.12 87.6141 42.088V55H83.7741ZM87.6141 39.16H97.1661C98.2861 39.16 99.2941 38.92 100.19 38.44C101.118 37.96 101.854 37.128 102.398 35.944C102.942 34.76 103.214 33.112 103.214 31C103.214 28.92 102.942 27.32 102.398 26.2C101.886 25.048 101.198 24.248 100.334 23.8C99.4701 23.352 98.5261 23.128 97.5021 23.128H87.6141V39.16ZM112.743 55V19.672H116.583V36.04H134.247V19.672H138.039V55H134.247V39.448H116.583V55H112.743Z"
            fill="black"
          />
        </svg>
      </Navigation>
    </Header>
  );
};

export default Navbar;
