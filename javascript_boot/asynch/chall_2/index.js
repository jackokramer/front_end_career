// Challenge: 
// Rewrite the GET API call from the previous challenge using async-await


// Challenge: 
/*
fetch('https://jsonplaceholder.typicode.com/users/3')
  .then(response => {
      if (!response.ok) {
        throw new Error(response.status);  
      }
      
      return response.json()
  })
  .then(person => console.log(`${person.name} works for ${person.company.name}`))
  .catch(err => console.error(err))
  */

  async function getUser(){
      try{
          const response = await fech('https://jsonplaceholder.typicode.com/users/3');
          if(!response.ok){
              throw new Error(response.status);
          }
          const person = await response.json(); // forgot this variable
      } catch (error){
          alert(error.message);
            console.log(error);
      }
  }
  getUser()