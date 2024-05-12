
"use client";
import { useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";


export default function Seoulapicom({handleClick,dday,objj, res}) {
 
 
    const {my} = Object.fromEntries(useSearchParams());

    
    
    
    const [check,setCheck] = useState(false);
    
    useEffect(() => {
    
        if(res.length){
            let c=[];
           
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
                
                ></div>
            </div>
            </label>
        </div>
        )
    }