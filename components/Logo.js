const Logo = ({ color = "text-blue-600", size = "w-40" }) => {
  return (
    <div className="cursor-pointer">
      <svg
        width="280"
        height="96"
        viewBox="0 0 280 96"
        fill="none"
        className={`${size} ${color}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M37.5334 57.96L32.6374 81H11.8054L17.0854 56.328L7.67738 20.04H30.7174L37.2454 44.136L51.6454 20.04H62.0134L37.5334 57.96ZM92.6209 37.704C92.8129 36.744 92.9089 35.432 92.9089 33.768C92.9089 32.808 92.8449 31.88 92.7169 30.984C92.5889 30.024 92.3649 29.192 92.0449 28.488C91.7249 27.72 91.2449 27.144 90.6049 26.76C89.9649 26.312 89.1329 26.088 88.1089 26.088C86.9569 26.088 85.9009 26.344 84.9409 26.856C83.9809 27.368 83.1169 28.04 82.3489 28.872C81.6449 29.64 81.0689 30.568 80.6209 31.656C80.2369 32.68 80.0449 33.768 80.0449 34.92C80.0449 36.584 80.4609 37.864 81.2929 38.76C82.1889 39.656 83.3409 40.392 84.7489 40.968C86.1569 41.544 87.7569 42.024 89.5489 42.408C91.3409 42.792 93.1969 43.24 95.1169 43.752C96.7169 44.2 98.3169 44.776 99.9169 45.48C101.517 46.184 102.925 47.144 104.141 48.36C105.421 49.512 106.445 51.048 107.213 52.968C107.981 54.824 108.365 57.16 108.365 59.976C108.365 64.008 107.565 67.4 105.965 70.152C104.365 72.904 102.157 75.144 99.3409 76.872C96.5249 78.6 93.1649 79.848 89.2609 80.616C85.4209 81.384 81.2289 81.768 76.6849 81.768C72.0769 81.768 68.3009 81.48 65.3569 80.904C62.4769 80.264 60.2049 79.592 58.5409 78.888C56.5569 78.056 55.0849 77.096 54.1249 76.008L57.3889 62.856H74.2849C74.2209 63.432 74.1569 64.232 74.0929 65.256C74.0289 66.216 73.9969 66.984 73.9969 67.56C73.9969 68.328 74.0929 69.128 74.2849 69.96C74.4769 70.792 74.7649 71.56 75.1489 72.264C75.5969 72.968 76.2049 73.544 76.9729 73.992C77.7409 74.44 78.7009 74.664 79.8529 74.664C81.1329 74.664 82.2529 74.376 83.2129 73.8C84.2369 73.224 85.0689 72.52 85.7089 71.688C86.4129 70.792 86.9249 69.832 87.2449 68.808C87.6289 67.72 87.8209 66.664 87.8209 65.64C87.8209 64.232 87.4689 63.048 86.7649 62.088C86.1249 61.128 85.2289 60.328 84.0769 59.688C82.9249 58.984 81.5809 58.408 80.0449 57.96C78.5729 57.448 77.0369 56.936 75.4369 56.424C73.9009 55.976 72.2689 55.432 70.5409 54.792C68.8769 54.152 67.3409 53.256 65.9329 52.104C64.5249 50.952 63.3409 49.512 62.3809 47.784C61.4849 45.992 61.0369 43.72 61.0369 40.968C61.0369 36.872 62.0609 33.448 64.1089 30.696C66.2209 27.88 68.8449 25.608 71.9809 23.88C75.1809 22.152 78.6689 20.936 82.4449 20.232C86.2209 19.464 89.8049 19.08 93.1969 19.08C97.6769 19.08 101.517 19.624 104.717 20.712C107.981 21.736 110.445 22.952 112.109 24.36L108.557 37.704H92.6209ZM166.245 81H143.781L142.437 65.736H124.677L117.861 81H108.549L136.869 20.04H159.621L166.245 81ZM127.845 58.728H141.765L139.557 32.616L127.845 58.728Z"
          fill="currentColor"
        />
        <path
          d="M171.7 38C171.7 36.6267 172.007 35.4 172.62 34.32C173.247 33.2267 174.093 32.38 175.16 31.78C176.24 31.1667 177.447 30.86 178.78 30.86C180.34 30.86 181.707 31.26 182.88 32.06C184.053 32.86 184.873 33.9667 185.34 35.38H182.12C181.8 34.7133 181.347 34.2133 180.76 33.88C180.187 33.5467 179.52 33.38 178.76 33.38C177.947 33.38 177.22 33.5733 176.58 33.96C175.953 34.3333 175.46 34.8667 175.1 35.56C174.753 36.2533 174.58 37.0667 174.58 38C174.58 38.92 174.753 39.7333 175.1 40.44C175.46 41.1333 175.953 41.6733 176.58 42.06C177.22 42.4333 177.947 42.62 178.76 42.62C179.52 42.62 180.187 42.4533 180.76 42.12C181.347 41.7733 181.8 41.2667 182.12 40.6H185.34C184.873 42.0267 184.053 43.14 182.88 43.94C181.72 44.7267 180.353 45.12 178.78 45.12C177.447 45.12 176.24 44.82 175.16 44.22C174.093 43.6067 173.247 42.76 172.62 41.68C172.007 40.6 171.7 39.3733 171.7 38ZM194.212 45.14C192.905 45.14 191.705 44.8333 190.612 44.22C189.518 43.6067 188.652 42.76 188.012 41.68C187.372 40.5867 187.052 39.3533 187.052 37.98C187.052 36.62 187.372 35.4 188.012 34.32C188.652 33.2267 189.518 32.3733 190.612 31.76C191.705 31.1467 192.905 30.84 194.212 30.84C195.532 30.84 196.732 31.1467 197.812 31.76C198.905 32.3733 199.765 33.2267 200.392 34.32C201.032 35.4 201.352 36.62 201.352 37.98C201.352 39.3533 201.032 40.5867 200.392 41.68C199.765 42.76 198.905 43.6067 197.812 44.22C196.718 44.8333 195.518 45.14 194.212 45.14ZM194.212 42.64C195.052 42.64 195.792 42.4533 196.432 42.08C197.072 41.6933 197.572 41.1467 197.932 40.44C198.292 39.7333 198.472 38.9133 198.472 37.98C198.472 37.0467 198.292 36.2333 197.932 35.54C197.572 34.8333 197.072 34.2933 196.432 33.92C195.792 33.5467 195.052 33.36 194.212 33.36C193.372 33.36 192.625 33.5467 191.972 33.92C191.332 34.2933 190.832 34.8333 190.472 35.54C190.112 36.2333 189.932 37.0467 189.932 37.98C189.932 38.9133 190.112 39.7333 190.472 40.44C190.832 41.1467 191.332 41.6933 191.972 42.08C192.625 42.4533 193.372 42.64 194.212 42.64ZM215.375 45H212.575L206.235 35.42V45H203.435V31.02H206.235L212.575 40.62V31.02H215.375V45ZM230.082 45H227.282L220.942 35.42V45H218.142V31.02H220.942L227.282 40.62V31.02H230.082V45ZM235.649 33.3V36.8H240.349V39.02H235.649V42.72H240.949V45H232.849V31.02H240.949V33.3H235.649ZM242.813 38C242.813 36.6267 243.12 35.4 243.733 34.32C244.36 33.2267 245.207 32.38 246.273 31.78C247.353 31.1667 248.56 30.86 249.893 30.86C251.453 30.86 252.82 31.26 253.993 32.06C255.167 32.86 255.987 33.9667 256.453 35.38H253.233C252.913 34.7133 252.46 34.2133 251.873 33.88C251.3 33.5467 250.633 33.38 249.873 33.38C249.06 33.38 248.333 33.5733 247.693 33.96C247.067 34.3333 246.573 34.8667 246.213 35.56C245.867 36.2533 245.693 37.0667 245.693 38C245.693 38.92 245.867 39.7333 246.213 40.44C246.573 41.1333 247.067 41.6733 247.693 42.06C248.333 42.4333 249.06 42.62 249.873 42.62C250.633 42.62 251.3 42.4533 251.873 42.12C252.46 41.7733 252.913 41.2667 253.233 40.6H256.453C255.987 42.0267 255.167 43.14 253.993 43.94C252.833 44.7267 251.467 45.12 249.893 45.12C248.56 45.12 247.353 44.82 246.273 44.22C245.207 43.6067 244.36 42.76 243.733 41.68C243.12 40.6 242.813 39.3733 242.813 38ZM268.345 31.04V33.3H264.625V45H261.825V33.3H258.105V31.04H268.345ZM180.94 62.34H175.38L174.46 65H171.52L176.54 51.02H179.8L184.82 65H181.86L180.94 62.34ZM180.18 60.1L178.16 54.26L176.14 60.1H180.18ZM198.636 65H195.836L189.496 55.42V65H186.696V51.02H189.496L195.836 60.62V51.02H198.636V65ZM206.283 51.04C207.75 51.04 209.037 51.3267 210.143 51.9C211.263 52.4733 212.123 53.2933 212.723 54.36C213.337 55.4133 213.643 56.64 213.643 58.04C213.643 59.44 213.337 60.6667 212.723 61.72C212.123 62.76 211.263 63.5667 210.143 64.14C209.037 64.7133 207.75 65 206.283 65H201.403V51.04H206.283ZM206.183 62.62C207.65 62.62 208.783 62.22 209.583 61.42C210.383 60.62 210.783 59.4933 210.783 58.04C210.783 56.5867 210.383 55.4533 209.583 54.64C208.783 53.8133 207.65 53.4 206.183 53.4H204.203V62.62H206.183ZM225.325 65.14C224.352 65.14 223.472 64.9733 222.685 64.64C221.912 64.3067 221.298 63.8267 220.845 63.2C220.392 62.5733 220.158 61.8333 220.145 60.98H223.145C223.185 61.5533 223.385 62.0067 223.745 62.34C224.118 62.6733 224.625 62.84 225.265 62.84C225.918 62.84 226.432 62.6867 226.805 62.38C227.178 62.06 227.365 61.6467 227.365 61.14C227.365 60.7267 227.238 60.3867 226.985 60.12C226.732 59.8533 226.412 59.6467 226.025 59.5C225.652 59.34 225.132 59.1667 224.465 58.98C223.558 58.7133 222.818 58.4533 222.245 58.2C221.685 57.9333 221.198 57.54 220.785 57.02C220.385 56.4867 220.185 55.78 220.185 54.9C220.185 54.0733 220.392 53.3533 220.805 52.74C221.218 52.1267 221.798 51.66 222.545 51.34C223.292 51.0067 224.145 50.84 225.105 50.84C226.545 50.84 227.712 51.1933 228.605 51.9C229.512 52.5933 230.012 53.5667 230.105 54.82H227.025C226.998 54.34 226.792 53.9467 226.405 53.64C226.032 53.32 225.532 53.16 224.905 53.16C224.358 53.16 223.918 53.3 223.585 53.58C223.265 53.86 223.105 54.2667 223.105 54.8C223.105 55.1733 223.225 55.4867 223.465 55.74C223.718 55.98 224.025 56.18 224.385 56.34C224.758 56.4867 225.278 56.66 225.945 56.86C226.852 57.1267 227.592 57.3933 228.165 57.66C228.738 57.9267 229.232 58.3267 229.645 58.86C230.058 59.3933 230.265 60.0933 230.265 60.96C230.265 61.7067 230.072 62.4 229.685 63.04C229.298 63.68 228.732 64.1933 227.985 64.58C227.238 64.9533 226.352 65.14 225.325 65.14ZM235.493 53.3V56.8H240.193V59.02H235.493V62.72H240.793V65H232.693V51.02H240.793V53.3H235.493ZM250.537 65L247.457 59.56H246.137V65H243.337V51.04H248.577C249.657 51.04 250.577 51.2333 251.337 51.62C252.097 51.9933 252.664 52.5067 253.037 53.16C253.424 53.8 253.617 54.52 253.617 55.32C253.617 56.24 253.35 57.0733 252.817 57.82C252.284 58.5533 251.49 59.06 250.437 59.34L253.777 65H250.537ZM246.137 57.46H248.477C249.237 57.46 249.804 57.28 250.177 56.92C250.55 56.5467 250.737 56.0333 250.737 55.38C250.737 54.74 250.55 54.2467 250.177 53.9C249.804 53.54 249.237 53.36 248.477 53.36H246.137V57.46ZM268.69 51.04L263.57 65H260.17L255.05 51.04H258.05L261.89 62.14L265.71 51.04H268.69ZM273.168 53.3V56.8H277.868V59.02H273.168V62.72H278.468V65H270.368V51.02H278.468V53.3H273.168Z"
          fill="currentColor"
          fillOpacity="0.75"
        />
      </svg>
    </div>
  );
};

export default Logo;