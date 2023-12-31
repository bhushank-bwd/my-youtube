import React, { useEffect, useMemo, useState } from "react";

const UseMemo = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [number, setNumber] = useState(0);
  function getNthPrime(n) {
    console.log("finding prime no ", n);
    if (n <= 0) {
      return 0;
    }

    let count = 0;
    let num = 2; // Start from the first prime number

    while (count < n) {
      if (isPrime(num)) {
        count++;
        if (count === n) {
          return num;
        }
      }
      num++;
    }
  }

  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    if (num <= 3) {
      return true; // 2 and 3 are prime
    }
    if (num % 2 === 0 || num % 3 === 0) {
      return false;
    }

    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) {
        return false;
      }
    }
    return true;
  }
  console.log("render usehooks");
  //   const primeNo = getNthPrime(parseInt(number));
  const primeNo = useMemo(() => getNthPrime(parseInt(number)), [number]); // memozing heavy operation using this hooks // use callback is sam but for function
  return (
    <div className={`w-80 h-80  p-2 ${darkMode ? "bg-black" : "bg-slate-200"}`}>
      <button
        className="p-2 m-2 bg-green-300 rounded-md"
        onClick={() => setDarkMode(!darkMode)}
      >
        Toggle Dark Mode
      </button>
      <br />
      <input
        type="number"
        className="h-10 w-32 p-2"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      ></input>{" "}
      <br />
      <span className={`${darkMode ? "text-white" : "text-black"}`}>
        {primeNo}
      </span>
    </div>
  );
};

export default UseMemo;
