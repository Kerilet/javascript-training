function swap() {
    if (document.getElementById('white').style.display === 'none') {
        document.getElementById('white').style.display = 'inline';
        document.getElementById('red').style.display = 'none';
    } else {
        document.getElementById('white').style.display = 'none';
        document.getElementById('red').style.display = 'inline';       
    }
}