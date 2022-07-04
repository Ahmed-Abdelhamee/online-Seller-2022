   function  get_source(){
    const source=document.getElementById('productBuy');
    source.src=localStorage.getItem('source');
   }
   get_source();