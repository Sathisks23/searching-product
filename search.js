let input= document.getElementById('input')
let name = document.querySelectorAll('small')
function search(){

    for(i in name){

        let  a = name[i].innerText.toLowerCase()
                console.log(typeof(a));

        if(a.indexOf(input.value.toLowerCase())!=-1){
            name[i].parentElement.style.display = ''
        }else{
             name[i].parentElement.style.display = 'none'

        }

        if(i==8) break
    }
    

}