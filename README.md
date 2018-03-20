# activityApp
This is a simple activity app using pure javascipt ES6
1. Start the app locally:
  make sure your internet is connected, using any brower open index.html
2. Main features:
   A. Display All:
   When users click Display All button, the app will dispaly a data table including a parent's name and all her/his activies. After all      activities are displaied, the all will show a completed message and go to another person
   B. Dsipaly By Parent:
   When users click Dsipaly By Parent button, the app will dispaly a data table including one person and one activity at time until finishing all parents and their activities.
   C. Add Parent
   When users click Add Parent, the app enables users input a valid person name (not including blank and empty space) before Display All and Display By Parent. If users input a invalid value, a popup window will show error message. Once users input a valid name, a popup window will show successful message.
   D. Add Activity
   Add Activity botton is disabled by default, once users input a vaild person name, it will enable Add Activity button which let user input one activity at time, once users input a activity, a popup window will show successful message.
   E. Customised Message: 
   If parents don't have activities or finished all activities a customized message will displaied in green.
 3. Library Used:
    bootstrap 3.3.7
    bootbox 4.4.0
    babel 5.8.34
 4. Methodology:
    Transferm parents data and curriculum data into a hash map, the key is parent's name and the value is an array of activities.

    
