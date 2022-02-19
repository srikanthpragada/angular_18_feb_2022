var marks: number[] = [10, 30, 40];

// for in takes index of array
for (let idx in marks)
    console.log(`Marks for student ${parseInt(idx) + 1} are ${marks[idx]}`)


// for of takes elements of array
for (let m of marks)
{
    console.log(m);
}