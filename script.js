function addinput(val){
    document.getElementById("ip").value += val
}
function clearfn(){
    document.getElementById("ip").value = ""
}
function result(){
    var ip = document.getElementById("ip").value
    var hist = document.getElementById("history")
    var soln = eval(ip)
    hist.innerHTML += ip + "="+ soln + "<br />" 
    document.getElementById("ip").value = soln
}