//------------INSERTION SORT-----------------------//
//we create a function ,lets name it insertionSort
function insertionSort(array=[29, 14, 7, 23, 10, 5, 18, 2, 30, 12, 9, 17, 25, 3, 20]){
//we state that this is an array
for(let i=0; i < array.length; i++){
//in this for loop we cycle through each element in the array.
    for(let j=i;j > 0; j--){
        //we cycle through elements from the end of array
        if(array [j-1] > array[j]){
            //if array before the current element is greater than current element
            const temp = array[j];
            array[j] = array[j-1];// this block of code swaps the two elements
            array[j-1] = temp;
        }
        else{
            break; //if sorted exit the inner loop
        }
    }
}
return array;// we return our sorted array.
}

console.log(insertionSort([29, 14, 7, 23, 10, 5, 18, 2, 30, 12, 9, 17, 25, 3, 20]))