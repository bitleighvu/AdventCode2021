import data from './depths.json';

const depths = data.depths;

function countingDepth(depths) {
    var count = 0;
    for (var i = 1; i < depths.length; i++) {
        if (depths[i] > depths[i-1]) {
            count++;
        }
    }
    return count++;
}

console.log(countingDepth(depths)); 

function slidingWindow(depths) {
    var count = 0;
    for (var i = 2; i < depths.length; i++) {
        var win1 = depths[i] + depths[i - 1] + depths[i - 2];
        var win2 = depths[i + 1] + depths[i] + depths[i - 1];
        if (win2 > win1) {
            count++;
        }
    }
    return count;
}
console.log(slidingWindow(depths)); 
