# emojipediaMapFunc
Emojipedia to understand mapping of javascript objects



```javascript
Array = [{id:1,name:"john"},{id:2,name:"bob"}];

function callbackFn (element){
  return(<Component />);
}

Array.map(callbackFn); //newArray
```

**callbackFn**
>Function that is called for every element of the Array. Each time callbackFn executes, the **returned** value is added to newArray.
>In this case, our array contains js objs, so for each element in the arr, we pass each js obj into the callback fn and return a component into NewArray.

The callbackFn function accepts the following arguments:

**element**
>The current element being processed in the array.
>in this case the element of the array are the javascript objects.
```javascript
Array.map(x=>x*x)
```

Other Functions: u can assign the function to a var then console.log that to see the result.

**arr.filter**
```javascript
arr.filter(function(num)){
  return num > 10
} 
<!-- returns [22,33] -->
```
**arr.reduce**
```javascript
arr.reduce(function(accumulator,currentNum){
  return accumulator + currentNum
})
<!-- accumulator takes on the value of each element in the array
     currentNum is the sum of each ele each iteration
-->
```
**arr.find, arr.findIndex**
```javascript
arr.find(function(num){
  return num > 10
})
<!-- gets the first value that fits the condition (or index for findindex) -->
```
