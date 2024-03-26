
"use client";
import { useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";


export default function Seoulapicom({handleClick,dday,objj, res}) {
    // console.log(res, objj)
 
    const {my} = Object.fromEntries(useSearchParams());
    // console.log(my.get('my'));
    // console.log(my ? Boolean(true)  : "my아닐때");
    
    
    
    const [check,setCheck] = useState(false);
    
    useEffect(() => {
    
        if(res.length){
            let c=[];
            // console.log(objj,"=======================")
            c = res.filter(obj=>obj.MAIN_IMG === objj.MAIN_IMG);
            c.length ? setCheck(true) :  setCheck(false);
        }
    
    }, [objj, res])

    function checkederror() { }

    return (
        <div>
            <label className="toggler-wrapper style-26">
            <input type="checkbox"  checked={check} onChange={checkederror}/>
            <div
                className="toggler-slider"
                onClick={(e) => {
                handleClick(e, {
                    GUNAME: objj.GUNAME,
                    MAIN_IMG: objj.MAIN_IMG,
                    DATE: objj.DATE,
                    ORG_NAME: objj.ORG_NAME,
                    IS_FREE: objj.IS_FREE,
                    LOT: objj.LOT,
                    LAT: objj.LAT,
                    dday: e.currentTarget.querySelector("#ddayta")
                    .textContent,
                    check: Boolean(false),
                });
                setCheck(!check)
         
                }}
            >
                <p id="ddayta" style={{ display: "none" }}>
                D{dday >= 0 ? "-" + dday : "+" + Math.abs(dday)}
                </p>
                <div
                className="toggler-knob"
                // onClick={(e) => e.stopPropagation()}
                ></div>
            </div>
            </label>
        </div>
        )
    }