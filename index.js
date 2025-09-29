// Auto update year in footer
document.getElementById("year").textContent = new Date().getFullYear();
fetch('https://raw.githubusercontent.com/missoyjoy/projectKQ/1a10b822474733d1c2b353bd5e934fd0994bde9a/db/db.json')
  .then(res => res.json())
  .then(data => console.log(data));
