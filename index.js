let container=document.querySelector("#container");
// let tas=document.querySelector("#addData").value;
// let che=document.querySelector("#checked").value;
// console.log(che)

// if(che=="true")
// {
//     tas.style.color="green"

// }else{
//     tas.style.color="red"
// }


displayTask()
async function displayTask()
{
   
    let res=await fetch(`http://localhost:3000/task`)
    let data=await res.json();
    console.log(data)
    data.forEach((element,index) => {

       
        let row=document.createElement("p")
        row.setAttribute("class","row")

        let td1=document.createElement("p")
        td1.textContent=element.task;
       
     if(element.status==true)
     {
         td1.style.color="green"
     }else{
         td1.style.color="red"
     }
         
        let td2=document.createElement("p");
        let delButton=document.createElement("button");
        delButton.innerText="DELETE";
        delButton.onclick= async function (){
            let res= await fetch(`http://localhost:3000/task/${element.id}`,{
              method: "DELETE"
            })
           
          }
       
        
          let td8=document.createElement("td")
          let edit=document.createElement("button")
          edit.innerText="Edit"
          console.log("student.id");
          localStorage.setItem("studentId",json.stringify(student.id))
          edit.onclick= async function (){
            let res= await fetch(`http://localhost:3000/task/${element.id}`,{
              method: ""
            })
           
          }
  
          td8.append(edit)
          
       
      td2.append(delButton)
        row.append(td1,td2,td8)
        container.append(row)
    });



   
            
        
    
}
 



let doneTask=document.querySelector("#addTask").addEventListener("click",async function(){
     try{
             let tasks=document.querySelector("#addData").value;
                let check=document.querySelector("#checked").checked;
                 let object={
                    task:tasks,
                    status:check
        
                }
                
                   
            
                
               
                let result=await fetch(`http://localhost:3000/task`,{
                    method:"POST",
                    body:JSON.stringify(object),
                    headers : {
                        "Content-Type": "application/json"
                    }
                })
                let allData=await result.json();
             
        
            }catch(error)
            {
                console.log(error)
            }
})
