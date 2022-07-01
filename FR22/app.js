
if(localStorage.getItem('users')=== null){
    localStorage.setItem('users',JSON.stringify([]));
  }
  
  
  function regclick(){ 
    const form3Example1cg =  document.getElementById('form3Example1cg').value
    const form3Example3cg = document.getElementById('form3Example3cg').value
    const form3Example4cg = document.getElementById('form3Example4cg').value
    
    if (nform3Example1cgame && form3Example3cg && form3Example4cg) {
      let userdata = {
        nform3Example1cgame: nform3Example1cgame,
          femail: femail,
          fpassword: fpassword
      }
    }
     else if(form3Example4cg === '' || form3Example1cg === '' || fpassword === '' ){
      alert('you need to add information')
     }
     else{
      alert('you passed')
     }
    }
  
  function logclick(){  
    let form3Example1cg = document.getElementById('form3Example1cg');
    let form3Example3cg = document.getElementById('form3Example3cg');
    let form3Example4cg =  document.getElementById('form3Example4cg');
  

    let emaill = document.getElementById('emaill');
    let pass = document.getElementById('pass');
   
   
    if(emaill.value === form3Example1cg && pass.value === form3Example3cg){
     }
     else{
      let add = JSON.parse(localStorage.getItem('users'));
      add.push({
        form3Example4cg : form3Example4cg,
        form3Example1cg : form3Example1cg,
        form3Example3cg : form3Example3cg
     })
     localStorage.setItem('users',JSON.stringify(add));
     alert(`${form3Example4cg} was added`);
     getusers()
     }
   
  }
  
  function getusers(){
    let basket = JSON.parse(localStorage.getItem('users'));
    let add = '';
  
    basket.forEach(x => {
      add += `
      <table>
      <tbody>
          <tr>
              <td> Name: </td>
              <td>${x.form3Example4cg}</td>
              
          </tr>
  
          <tr>
              <td> Email: </td>
              <td>${x.form3Example1cg}</td>
              
          </tr>
      </tbody>
    </table>
      `
    })
    document.getElementById('show').innerHTML = add;
  
  }
  getusers();
  