"use client";

import axios from "axios";
import { create } from "zustand";


export const useStore = create((set) => {
  return {
    count: 0,
    testdata: [],
    mycomdata: [],
    timetam: 0,
    allheaderaria:{},

    action: async (type, info) => {
      let d;
     
      switch (type) {
        case "get":
          const today = new Date();
          const year = today.getFullYear();
          const month = today.getMonth() + 1;
          const date = today.getDate();
          const todayString = `${year}-${month}-${date}`;
          const timetam = new Date(todayString).getTime();
          set({ timetam: timetam });

          const fetchData = async (start, end) => {
            const res = await axios.get(`/api/seoul?start=${start}&end=${end}`);
            return res.data.culturalEventInfo.row;
          };

          const fetchAllData = async () => {
            const lengthRes = await axios.get(`/api/seoul?start=${1}&end=${1000}`);
            const lengthone = lengthRes.data.culturalEventInfo.list_total_count;
            const promises = [];
            promises.push(await fetchData(1, 1000));
            for (let i = 1001; i <= Number(lengthone); i += 1000) {
              promises.push(
                await fetchData(i, Math.min(i + 999, Number(lengthone)))
              );
            }
            const results = await Promise.all(promises);
            return results.flat();
          };

          fetchAllData()
            .then((allRes) => {
              const data = allRes.filter((obj) => {
                const dataString = obj.DATE.split("~")[0];
                const listday = obj.DATE.split("~")[1];
                const timestamp = new Date(dataString).getTime();
                const timestamplistday = new Date(listday).getTime();
                return timetam < timestamp || timetam < timestamplistday;
              });
              set({ testdata: data });
            })
            .catch((error) => {
              console.error("Error fetching data:", error);
            });
          break;
          case "allaria":
            set({allheaderaria: info})
              
          break;
      }
      
    },
    increment: () => {
      set((state) => {
        return { count: state.count + 1 };
      });
    },
  };
});
