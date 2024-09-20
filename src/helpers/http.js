export default{
    get:async function(url){
        try {
            const response = await fetch(url, {
              method: 'GET',            
              headers: {
                'Content-Type': 'application/json',
                'Accept':'application/json'
              },
            });  
                       
           return await response.json(); 

          } catch (error) {
            console.error('Error:', error);
          }
    },   
    post:async function(url,data){
        try {
            const response = await fetch(url, {
              method: 'POST',
              body:data
            });
          
            return await response.json();

          } catch (error) {

            console.error('Error:', error);
            
          }
    },
    delete:async function(url,data){      
        try {
            const response = await fetch(url, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              body: new URLSearchParams(data).toString()
            });
            
            return await response.json();
           
          } catch (error) {
            console.error('Error:', error);
          }

    }
}


