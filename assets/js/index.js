function calcular(){
    alert('La cantidad y el color son obligatorios')
    const cantidad = document.querySelector ('#cantidad').value;
    const color = document.querySelector ('#color').value;
    const precio = document.querySelector ('#precio').innerHTML;
    document.querySelector('#resumen_total').innerHTML = cantidad * precio;
    document.querySelector('#resumen_cantidad').innerHTML = cantidad;
    document.querySelector('#resumen_color').style.backgroundColor = color;
    
    
 }