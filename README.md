# MutableAndImmutableObjects

## Instructions

You can run the project with "ng serve"

Once running open the browser at "localhost:4200" and the open the dev tool on the console tab.

## String
You should see the output "some text", when you look at the code, you may have thought it was going to show "om" as we did some string manipulation, what actually happened was a new string was created and we did not set it tp a new variable, this shows that strings are immutable as when we did the slice, a new string was created.

## Array
Comment the string example out and uncomment the array code below it.

Go back to the dev tools and notice that the output now shows "one, two, three, four". 

This shows that when we pushed our new data into the array it did not create a new array, like in the case of when we manipulated the string. 

The operation was performed on the array we declared. hence we see all of the data.
