// calls driver function 
function fetchInfo() {
    var code = document.getElementById("usrinp").value;
    fetchGif(code); 
}

// fetch GIF/jpg based on HTTP status code
function fetchGif(code) {
    try {
        var gif = document.getElementById("gif");
        gif.style.display="initial";
        var status = document.getElementById("code");
        var codeInfo = document.getElementById("codeInfo");
        var gif =  document.getElementById("gif");
        var info = isCodeValid(code);
        document.getElementById("usrinp").value = "";
        status.textContent = `Response code: ${code}`;
        if(info != false) { 
            gif.src = `https://vadivelu.anoram.com/gif/${code}`;
            gif.onerror = function () {
                console.log('image not available in gif format, so Loading it in jpg format');
                this.src = `https://vadivelu.anoram.com/jpg/${code}`;       
            };
            codeInfo.textContent = `Status: ${info}`;
        }
        else {
            gif.style.display="none";
            codeInfo.textContent=`Sorry, no image/gif avaiable for this status code`;
        }
    }   
    catch(error) {
        console.log(error);
    }
}

// retrieve response info 
function isCodeValid(code) {
  var status = false;
  for (var i = 0 ; i<statusCode.length;i++) {
        if(statusCode[i].statusCode == code) {
            status = true;
            return statusCode[i].info;
        }
    }
    if(!status) {
        var codeInfo = document.getElementById("codeInfo");
        codeInfo.textContent = "";
        return status;
    }
}