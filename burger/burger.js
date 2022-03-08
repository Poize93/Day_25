
getData()


async function getData(){
  
//    console.log("fething data")
    try{
        const out= await fetch("https://bobsburgers-api.herokuapp.com/characters")
        const result=await out.json();
        console.log(result)
        // console.log(result[0],"sample")

        NoOfPAges=Math.ceil(result.length/20)
        console.log(NoOfPAges)
        const pagination=document.querySelector(".pagination");
        for(let i=1;i<=NoOfPAges;i++){
           
            const btn=document.createElement("button")
            btn.innerText=i;
            
            pagination.append(btn)
            btn.onclick= () =>{
                const dtls=document.querySelector(".display").innerHTML=""
                const result_select=result.slice((i-1)*20,(i*20))
                for( let ele of result_select){
                    
                        display(ele)
                        
                }
                
            }
        }
        
        const result_select=result.slice(0,20)
        for( let ele of result_select){
            
                display(ele)
                
        }
    }
    catch{
        const dtls=document.querySelector(".display").innerHTML=""
        error()
    }
 
}


async function display(x){
    const dtls=document.querySelector(".display").innerHTML+=`<div class="card">
        <div class="event">
            <p class="evt_dtls"> <span class="title">Name:</span>${x.name}</p>
            
            <p class="evt_dtls"> <span class="title">Gender:</span>${x.gender}</p>
            <p class="evt_dtls"> <span class="title">Occupation:</span>${x.occupation}</p>
            <p class="evt_dtls"> <span class="title">Voiced_By:</span>${x.voicedBy}</p>
            <p class="evt_dtls"> <span class="title">First Episode:</span>${x.firstEpisode}</p>
           
        </div>
       
        <img class="img_event" src= "${x.image}">
        
    </div>`
    
}
    
function error(){
    const dtls=document.querySelector(".display").innerHTML+=`<div> Data Can not be Fetched Properly</div>`


} 
