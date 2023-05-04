var string="";
var buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=="Enter")
        {
            string = eval(string);
        }
        else if(e.target.innerHTML == "AC")
        {
            string="";
        }
        else if(e.target.innerHTML == "del")
        {
            string = string.slice(0,-1);
        }
        else
        {
            console.log(e.target);
            string = string + e.target.innerHTML;
        }
        document.querySelector('input').value=string;
    })
})
