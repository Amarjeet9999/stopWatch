import React, { useState, useRef } from "react";
import styled from "styled-components";

export const StopWatch = () => {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(false);

  const start = () => {
    setStatus(false);
    run();
    setInterv(setInterval(run, 10));
  };
  console.log(12);
  var updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const stop = () => {
    if (!status) setStatus((e) => !e);
    clearInterval(interv);
  };

  const reset = () => {
    clearInterval(interv);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };

  return (
    <Main>
      <h1>Stop Watch </h1>
      <div className="line"></div>
      <div className="box">
        <div>{time.h}</div>
        <div>H</div>
        <div>{time.m}</div>
        <div>M</div>
        <div>{time.s}</div>
        <div>S</div>
        <div>{time.ms}</div>
        <div>MS</div>
      </div>
      <div className="line"></div>
      <div className="timeSelct"></div>
      <div className="button">
        <button onClick={start}>{!status ? "Start" : "Resume"}</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </Main>
  );
};

const Main = styled.div`
  height: 100vh;
  width: 100%;

  & h1 {
    width: max-content;
    margin: auto;
    color: white;
    font-size: 45px;
    margin-top: 25px;
  }

  & .line {
    min-width: 200px;
    max-width: 200px;
    margin: 25px auto;
    border: 2px solid red;
  }

  & .box {
    min-width: 500px;
    max-width: 500px;
    height: 100px;
    align-items: center;
    margin: 25px auto;
    display: flex;
    justify-content: center;
    font-size: 30px;
    color: white;

    & div:nth-child(odd) {
      background: aliceblue;
      height: 50px;
      width: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: black;
    }
    & div:nth-child(even) {
      height: 50px;
      width: 60px;
      background: grey;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  & .timeSelct {
    height: 40px;
    width: 200px;
    margin: auto;
    display: flex;

    & select {
      border: 2px solid red;
      width: 75px;
      font-size: 20px;
      outline: none;
    }
  }

  & .button {
    width: 350px;
    margin: auto;
    display: flex;
    & button {
      margin: auto;
      cursor: pointer;
      background-color: yellowgreen;
      border: none;
      outline: none;
      height: 40px;
      width: 100px;
      border-radius: 5px;
      font-size: 20px;
      padding: 5px 5px;
      :hover {
        background-color: green;
      }
    }
  }
`;
