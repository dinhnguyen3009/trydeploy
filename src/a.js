const axios = require('axios')
onSubmit = async() => {
    try{
      const username = 'dinh';
      const password = '123';
      const uri = "https://hack-face.herokuapp.com/login"; 
      const respone = await axios.post(uri,{username,password});
      const message = respone.data.message;
      console.log(message)
      }
      catch(error){
          console.log(error.message)
      }
    
    }
    onSubmit();