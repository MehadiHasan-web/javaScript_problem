// Mehadi Hasan Shakil:



// Write javaScript program count total duplicate element in array. 
const numbers = [10, 10, 2, 5, 7, 2, 9, 20];

const duplicate = numbers.filter(function(value, index, array){
    return array.indexOf(value) !== index;
});
console.log(duplicate);


// bubble Sort  algorithm  

var arr = [10, 2, 5, 7,  10, 2, 5, 7, 9, 20];

function bubbleSort(arr){
    var i, j, tmp;
    for(var i = 0; i<arr.length; i++){
        for(let j = 0; j<arr.length -i; j++){
            if (arr[j]> arr[j + 1]) {
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;

            }
        }
    }
    return(arr);
}
console.log(bubbleSort(arr))

//write a javascript program apply Binary search algorithm.

let num = bubbleSort([10, 2, 5, 7, 9, 20]) // is sort !!
[2, 2, 5, 5, 7, 7, 9,10, 10,20 ]

function binary_search(array, search){
    let firstIndex = 0 ;
    let lastIndex = array.length-1;
    let mid;

    while (firstIndex <= lastIndex) {
         mid = Math.floor((firstIndex + lastIndex)/2);
        
        if(array[mid] == search){
            return mid;
        }else if(search > array[mid]){
            firstIndex = mid + 1;
        }else{
            lastIndex = mid - 1;
        }
    }

    return -1;
}

let  pos = -1;
let check = binary_search(num, 10);


if(pos == check){
    console.log('data not found.');
}else{
    console.log('data is found.' + check);
}
