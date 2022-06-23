'use strict';



//  PART 1:  filling the table

let table = [];

for(let i = 0; i < 10; i++) {                                             

    let row = []; 
                                                     
    for(let j = 0; j < 10; j++) {
        row.push((j + 1) * (i + 1));
    }

    table.push(row);
}



//  PART 2:  displaying the table

for (let i = 0; i < table.length; i++) {

    let  row = table[i];

    for(let j = 0; j < row.length; j++) {

        let value = row[j];

        process.stdout.write(value.toString() + '\t');

    }

    console.log();
}




console.log();
       

