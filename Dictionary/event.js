

display()

async function getData(){
    const inpt=document.querySelector(".txt").value
    try{
        const out= await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inpt}`)
        const result=await out.json();
        // console.log(result,inpt,"chcking here")
        print(result[0],inpt)
        
    }
    catch{
       const dtls=document.querySelector(".meaning").innerHTML=""
        error()
    }
 
}

function print(x,y){
    const meaning=document.querySelector(".meaning").innerHTML=""
    document.querySelector(".meaning").innerHTML+=`<div>
    <p class="mean"><span class="title">Word:</span><span class="word">${y}</span></p>
    <p class="mean"><span class="title">Phonetics:</span><span class="phonetic">${x.phonetic}</span></p> 
    <hr>
    </div>`

    for(let ele of x.meanings){
        document.querySelector(".meaning").innerHTML+=`<div>
        <p class="mean"><span class="title">Part Of Speech:</span><span class="speech">${ele.partOfSpeech}</span></p>
        <p class="mean"><span class="title">Meaning:</span><span class="meaning">${ele.definitions[0].definition}</span></p>
        <hr>
    </div>`
    }
}


async function display(){
    const dtls=document.querySelector(".search").innerHTML=`<div class="search_box">
    <textarea class="txt" placeholder="Search your Word"></textarea>
    <button class="submit" onclick="getData()">Search
    </div>`

    
}
    
function error(){
    const dtls=document.querySelector(".meaning").innerHTML+=`<div> Data can not be Fetched</div>`
} 
