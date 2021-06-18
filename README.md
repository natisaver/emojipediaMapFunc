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


other functions: arr.filter, arr.reduce
