import React from 'react';
import {useState} from "react";
import {doMatrix} from "../executing/elimit"
import FOOT from "./FOOT";



const Matrix = (values,y) => {

    const [res,setRes] = useState([]);

    if (values.x === 0 || values.y === 0) {

        return null;

    }

    let result = [];

    for (let i = 0; i < values.y; i++) {

        let list = [];

        for (let z = 0; z < values.values; z++) {

            if (z === values.values - 1) {
                list.push(<input type={"number"} id={String(i + 1) + 0} key={String(i + 1) + (z + 1)} style={{marginRight : "1vw",marginBottom : "2vh",borderWidth: 5,borderColor: "black",borderStyle: "solid"}}/>);
            } else {

                list.push(<input type={"number"} id={String(i + 1) + (z + 1)} key={String(i + 1) + (z + 1)} style={{marginRight : "1vw",marginBottom : "2vh"}}/>);

            }



        }

         result.push(list);

    }

    return (

       <>
           {result.map((v) => {
               return <div className={"center"}>{v}</div>
           })}

           <div className={"center"} style={{marginTop: "2vh"}}>
               <button type={"button"} onClick={() =>  {
                 setRes(doMatrix(document.getElementById("X").value,document.getElementById("Y").value))
               }}>Proceed!</button>
           </div>
            <FOOT table={res}/>
       </>

    )


}

const Core = () => {

    const [x,setX] = useState(0);
    const [y,setY] = useState(0);

    return (
        <>
            <div className={"center"} style={{marginBottom : "3vh"}}>Choose size of a matrix</div>
            <div className={"center"} style={{marginBottom: "5vh"}}>
                <select id={"X"} onChange={() => {setX(Number(document.getElementById("X").value))}} style={{marginRight : "1vw"}}>
                    <option value={0}>---</option>
                    <option value={2}>2 columns</option>
                    <option value={3}>3 columns</option>
                    <option value={4}>4 columns</option>
                    <option value={5}>5 columns</option>
                    <option value={6}>6 columns</option>
                    <option value={7}>7 columns</option>
                    <option value={8}>8 columns</option>
                    <option value={9}>9 columns</option>
                    <option value={10}>10 columns</option>
                </select>
                <div>X</div>
                <select id={"Y"} onChange={() => {setY(Number((document.getElementById("Y").value)))}} style={{marginLeft: "1vw"}}>
                    <option value={0}>---</option>
                    <option value={2}>2 rows</option>
                    <option value={3}>3 rows</option>
                    <option value={4}>4 rows</option>
                    <option value={5}>5 rows</option>
                    <option value={6}>6 rows</option>
                    <option value={7}>7 rows</option>
                    <option value={8}>8 rows</option>
                    <option value={9}>9 rows</option>
                    <option value={10}>10 rows</option>
                </select>
                {/*<button style={{marginLeft: "10vw"}}>importuj macierz</button>*/}
            </div>
            <div>
                <Matrix values={x} y={y}/>
            </div>

        </>
    );
};

export default Core;
