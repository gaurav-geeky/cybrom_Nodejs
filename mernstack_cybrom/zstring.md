# connection string mongo db atlas 

mongodb+srv://gauravnegigeeky_db_user:BygAf3mCRGnt5KJp@cluster0.2uhh1hy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0  
# sometime server disconnect due to differenet Network IP address

# 

# ENV VARIABLE  .env  

# in server we need to install  npm i dotenv 
then make   .env   file here important  information only. 



# but in   front  end   react 
   
    no need to install 
    only make    .env  file here 

    VITE_BACKEND_URL = http://localhost:9500  

    change all api link to 
    
    let api = `${import.meta.env.VITE_BACKEND_URL}/editsave`; 

