function plusMinus(arr) {
    // Write your code here
    let n = arr.length;
    let positiveValues = 0;
    let negativeValues = 0;
    let zeroValues = 0;
    for(i=0; i<arr.length; i++){
        if(arr[i]>0){
            positiveValues++;
        }else if(arr[i]<0){
            negativeValues++;
        }else{
            zeroValues++;
        }
    }
    let positiveProportion = (positiveValues / n).toFixed(6);
    let negativeProportion = (negativeValues / n).toFixed(6);
    let zeroProportion = (zeroValues / n).toFixed(6);
    console.log("proportion of positive values ",positiveProportion);
    console.log("proportion of negative values ",negativeProportion);
    console.log("proportion of zero values ",zeroProportion);

}

let arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);