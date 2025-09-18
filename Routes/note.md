september 16, 2025

# Router in   express 

___ first  route file ___ we make a Route folder in which we made our  student / teacher / employee ____ various routes 
& export it  


___ second  index js ___   outside we made a project of node js with index file in which  we store in variable that  student route file  path.

# const stuRoute = require("./Routes/studentRoute"); 



now, define middleware :  some path after which  student's different paths will work .  
# middleware : to stop something in middle. 

/student/home 
/student/course 
/student/fees 
/student/data.

# studentRoute.js   
  
1. Import  express   
2. const  route = express.Router (  )   
 *Router express method*
3. make different routes /home /service   /about  using get method
4. module export = route.


# Index.js 

1. import express    
2. store in variable app 
3. store students  route path  using require    
4. make middleware   /students   iske agey routes lagenge   &  refer route path ( a, b )   
5. Listen app   at port













