const doMatrix = (x,y) => {

    let matrix = [];
    let copy = [];

    for (let q = 1; q <= Number(y); q++) {
        let row = [];
        for (let w = 1; w <= Number(x); w++) {

            if (w === Number(x)) {
                let id = String(q) + String(0)
                let tmp = document.getElementById(id).value;
                row.push(Number(tmp));


            } else {
                let id = String(q) + String(w)
                let tmp = document.getElementById(id).value;
                row.push(Number(tmp));
            }
        }
        matrix.push(row);
        copy.push(row);
    }

    let j = 1;
    let i = [];
    let poz = 0;

    for (let z = 2; z <= matrix.length; z++) {

        i.push(Number(z));

    }


    let m = [];

    for (j; j < Number(y); j++) {

        for (let u = 0; u < i.length; u++) {

            m.push(Number((matrix[u + j][j - 1]/matrix[j-1][j-1])));


        }


        for (let l = j; l < Number(y); l++) {

            for ( let index = j-1; index < Number(x);index++) {


                copy[l][index] = Number(matrix[l][index] - (m[poz] * matrix[j - 1][index])).toFixed(1);



            }


            poz++;

        }

        matrix = copy;

        i.reverse();
        i.pop();
        i.reverse();


        m = [];
        poz = 0;

    }

    // Ważna uwaga, rozwiązanie to bazuje na tym, że zakładamy maksymalnie 10 rozwiązań.

    let res = [];


    for (let mm = 1; mm < matrix.length;mm++) {

        res.push(0);

    }


    for (let pos=(matrix.length - 1); pos >= 0; pos--) {

        if (pos === matrix.length - 1) {

            res.push(Number((matrix[matrix.length - 1][Number(x) - 1] / matrix[matrix.length - 1][Number(y) - 1])))


        } else {

            let math = [];
            let result = 0;

            math.push(Number(matrix[pos][Number(x) - 1]))

            for (let zz=0;zz < Number(y);zz++) {

                if (Number(matrix[pos][zz]) !== 0 && Number(res[zz]) !== 0) {

                    matrix[pos][zz] = Number(matrix[pos][zz] * res[zz])

                    math.push( Number(-(matrix[pos][zz])))


                }

            }

            for (const ma of math) {
                result += ma;
            }

            res[pos] =  Number( result/matrix[pos][pos]);

        }

    }

    console.log(res)

    return res

};

export {

    doMatrix,

}
