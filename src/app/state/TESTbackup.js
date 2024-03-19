"use client";
import { create } from "zustand";
import axios from "@/app/lib/axios";
import { useEffect, useState, useCallback } from "react";

export const useStore = create((set) => {
  return {
    count: 0,
    testdata: [],
    seouldata: [],

    action: async (type, info) => {
      let d;
      switch (type) {
        case "get":
          const [newdata, setNewdata] = useState([]);

          let today = new Date();

          let year = today.getFullYear();
          let month = today.getMonth() + 1;
          let date = today.getDate();
          let todaytoday = `${year}-${month}-${date}`;

          let timetam = new Date(todaytoday).getTime();

          let day = today.getDay();

          async function fetchData(start, end) {
            const res = await axios.get(`/${start}/${end}`);
            return res.data.culturalEventInfo.row;
          }

          const fetchAllData = useCallback(async () => {
            const lengthRes = await axios.get(`/${1}/${1000}`);
            const lengthone = lengthRes.data.culturalEventInfo.list_total_count;
            const promises = [];
            promises.push(fetchData(1, 1000));
            for (let i = 1001; i <= Number(lengthone); i += 1000) {
              promises.push(fetchData(i, Math.min(i + 999, Number(lengthone))));
            }
            const results = await Promise.all(promises);
            const allRes = results.flat();
            return allRes;
          }, []);

          useEffect(() => {
            fetchAllData()
              .then((allRes) => {
                const data = allRes.filter((obj) => {
                  var dataString = obj.DATE.split("~")[0];
                  var listday = obj.DATE.split("~")[1];
                  var timestamp = new Date(dataString).getTime();
                  var timestamplistday = new Date(listday).getTime();
                  return timetam < timestamp || timetam < timestamplistday;
                });
                setNewdata(data);
              })
              .catch((error) => {
                console.error("Error fetching data:", error);
              });
          }, [fetchAllData]);

          useEffect(() => {
            console.log("1", newdata);
          }, [newdata]);

          break;
      }

      set({ testdata: newdata });
    },

    increment: () => {
      set((state) => {
        return { count: state.count + 1 };
      });
    },
  };
});
