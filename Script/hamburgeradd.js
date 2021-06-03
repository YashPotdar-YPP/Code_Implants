const mainmenu = document.querySelector('.mainmenu') 
const closebtn = document.querySelector('.closebtn') 
const Open_menu = document.querySelector('.Open_menu') 



Open_menu.addEventListener('click',show);
closebtn.addEventListener('click',close);

function show(){
    mainmenu.style.display = 'flex';
    mainmenu.style.top = '0';
    mainmenu.style.Color = '#000'; 
    mainmenu.style.backgroundColor = 'white'
}

function close(){
    mainmenu.style.top = '-90%'
}