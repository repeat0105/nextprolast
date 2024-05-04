"use client";

import React, { useState, useMemo, useEffect } from "react";

const CalenderList = ({ stastartday,setStastartday }) => {
  const [calender, setCalender] = useState("");

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);

  const checkLeapYear = (year) => {
    if (year % 400 === 0) return true;
    else if (year % 100 === 0) return false;
    else if (year % 4 === 0) return true;
    else return false;
  };

  const getFirstDayOfWeek = (year, month) => {
    let zero = "";

    if (month < 10) zero = "0";

    return new Date(year + "-" + zero + month + "-" + "01").getDay();
  };

  const changeYearMonth = (year, month) => {
    let monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (month === 2) if (checkLeapYear(year)) monthDay[1] = 29;

    let firstDay = getFirstDayOfWeek(year, month);

    let lastDay = monthDay[month - 1];

    let arrCalender = [];

    for (let i = 0; i < firstDay; i++) {
      arrCalender.push("");
    }

    for (let i = 1; i <= monthDay[month - 1]; i++) {
      arrCalender.push(String(i));
    }

    let remainDay = 7 - (arrCalender.length % 7);

    if (remainDay < 7) {
      for (let i = 0; i < remainDay; i++) {
        arrCalender.push("");
      }
    }

    renderCalender(arrCalender);
  };

  const [staclickday, setStaclickday] = useState("");

  const clickday = (e) => {
    if (Number(e.target.textContent.trim())) {
      setStaclickday({
        year: currentYear,
        month: currentMonth,
        day: e.target.textContent.trim(),
      });
    }
  };

  useEffect(() => {
    setStastartday(staclickday);
  }, [staclickday]);

  const renderCalender = (calender) => {
    let contents = [];
    let bb = [];
    let z = [...calender];

    for (let i = 0; i < calender.length; i++) {
      if (i === 0) contents.push("<tr>");
      else if (i % 7 === 0) {
        contents.push("</tr>");
        contents.push("<tr>");
      }
      z.push(i);

      contents.push(
        `<td>
                    <div class="table_hover">
                        
                        <span class="">${calender[i]}</span>
                    </div>
                </td>`
      );
    }

    contents.push("</tr>");

    setCalender(contents.join(""));
  };

  const changeMonth = (diff) => {
    setCurrentMonth((prev) => prev + diff);
  };

  const calenderMemo = useMemo(() => {
    if (currentMonth < 1) {
      setCurrentYear((prev) => prev - 1);
      setCurrentMonth(12);
    } else if (currentMonth > 12) {
      setCurrentYear((prev) => prev + 1);
      setCurrentMonth(1);
    }
    changeYearMonth(currentYear, currentMonth);
  }, [currentYear, currentMonth]);


  useEffect(()=>{
    if(calender.length){
      setTimeout(()=>{
        const day = document.querySelectorAll('.table_hover');
        day.forEach((n)=>{
          n.onclick = clickday;
        })     
      },400)     
    }
  },[calender,stastartday])

  return (
    <div className="calender_wrap">
      <div className="calender__">
        <div className="calender_button_wrawp">
          <button
            onClick={() => changeMonth(-1)}
            className="calender_button_left"
          ></button>
          <input
            type="number"
            value={currentYear}
            onChange={(e) => setCurrentYear(parseInt(e.target.value))}
          />
          <select
            value={currentMonth}
            onChange={(e) => setCurrentMonth(parseInt(e.target.value))}
          >
            <option value="1">1월</option>
            <option value="2">2월</option>
            <option value="3">3월</option>
            <option value="4">4월</option>
            <option value="5">5월</option>
            <option value="6">6월</option>
            <option value="7">7월</option>
            <option value="8">8월</option>
            <option value="9">9월</option>
            <option value="10">10월</option>
            <option value="11">11월</option>
            <option value="12">12월</option>
          </select>
          <button onClick={() => changeMonth(1)}></button>
        </div>
        <div>
          <table className="table_border calender_table table_bordered">
            <thead>
              <tr>
                <th>일</th>
                <th>월</th>
                <th>화</th>
                <th>수</th>
                <th>목</th>
                <th>금</th>
                <th>토</th>
              </tr>
            </thead>
            {calender.length > 0 && (
              <tbody dangerouslySetInnerHTML={{ __html: calender }}></tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default CalenderList;
