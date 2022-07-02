import React from 'react';

const Foot = (table) => {

    if (table === []) {

        return null

    }

    let text = ""

    for (let i = 0; i < table.table.length; i++) {


        if (isNaN(table.table[i])) {
            if (i === table.table.length - 1) {
                text += "x" + (i + 1) + " = brak"
            } else {
                text += "x" + (i + 1) + " = brak  , "
            }
        } else {

            if (i === table.table.length - 1) {
                text += "x" + (i + 1) + " = " + table.table[i].toFixed()
            } else {
                text += "x" + (i + 1) + " = " + table.table[i].toFixed() + "  , "
            }

        }





    }

    return (
        <div className={"FOOT center"} style={{fontSize : 30, fontFamily : "monospace"}}>
            {text}
        </div>
    );
};

export default Foot;
