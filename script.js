document.querySelector('.ham').addEventListener('click', function(){
    const menu = document.querySelector('.list');
    if(menu.style.display==='none' || menu.style.display===''){
        menu.style.display= 'block'; 
    }else{
        menu.style.display='none';
    }
}  );


    
    
