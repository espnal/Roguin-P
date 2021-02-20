let colorInputColor = document.getElementById('colorInputColor')

colorInputColor.addEventListener('input', e => {
    let background = document.getElementById('background')
    background.style.background = e.target.value
})
let size;

function incfont() {
    let d = document.getElementById('fontsize').value;
    let x = document.getElementById('background');
    x.style.fontSize = d + "px"
    size = d
    document.getElementById("size").innerHTML = size;
}