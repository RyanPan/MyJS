function myconsole()
{

}

myconsole.log = function(msg)
{
    var logdiv = document.createElement("div");
    logdiv.style.border = "solid black 0px";
    logdiv.style.color = "white";
    logdiv.style.background = "black";
    logdiv.style.padding = "10px";
    logdiv.innerHTML = msg;
    document.body.appendChild(logdiv);
}

if (document)
{
    console = myconsole;
}