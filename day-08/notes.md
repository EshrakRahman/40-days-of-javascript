# Execution context
- lexicul enviroment 
- Global execution context
- its create two object one is window and this 
- creation phase 
- window === this its referencing to the same memory address 
``` var name = "tom";
function sayName () {
    console.log(this.name);
} 
```
# creation phase
- in this code global execution context will be created and the the initilization will happen 
- allocate memory for variable and fuction 
- name will be initialize by undefined
- the funciton body will be placed directly into memory 
# execution phase
- it will assign the value tom to the varriable name 
- function execution phase only creqated if we call or invoke a fuction 
- 