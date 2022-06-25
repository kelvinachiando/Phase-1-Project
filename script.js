const input= document.getElementById('input');
const search_btn = document.getElementById('search_btn');

search_btn.addEventListener('onclick', e=> {
    e.preventDefault();
})

const word=input.value;

const fetchData = async () => {
    const input = document.querySelector('input').value;
    console.log(input);
    if(!!input){
        try{
            const response =  await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`);
            const responseJson = await response.json();
            console.log(responseJson); 
            document.getElementById('result').innerHTML = responseJson[0].meanings[0].definitions[0].definition; 
        }
        catch(e){
            console.error('There was an error during fetch ', e);
        }
    }
}

