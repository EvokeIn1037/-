//selecting all required elements
const dropArea = document.querySelector(".drag-area"),
text = document.querySelector(".inputchar"),
checkc = document.querySelector(".checkchar"),
button = dropArea.querySelector("button"),
input = dropArea.querySelector("input");

let file;

button.onclick = ()=>{
    input.click();
}

input.addEventListener("change", function(){
    file = this.files[0];
    showResult();
});

//drag file over dragarea
dropArea.addEventListener("dragover", (event) => {
    event.preventDefault();
    //console.log("file is over dragarea");
    dropArea.classList.add("active");
});

//drag file out of dragarea
dropArea.addEventListener("dragleave", () => {
    //console.log("file is outside from dragarea");
    dropArea.classList.remove("active");
});

dropArea.addEventListener("drop", (event) => {
    event.preventDefault();
    //console.log("file is on dragarea");
    file = event.dataTransfer.files[0];
    showResult();
});

function startBar() {
    var progressbar = $("#progressbar"), progressLabel = $(".progress-label"), add = $("#jmpAdd");

    progressbar.progressbar({
        value: false,
        change: function() {
            progressLabel.text(progressbar.progressbar("value") + "%");
        },
        complete: function() {
            progressLabel.text("完成！");
            add.text("上传成功，点击前往下载处理结果");
        }
    });

    function progress() {
        var val = progressbar.progressbar("value") || 0;
        progressbar.progressbar("value", val + 1);
        if (val < 99) {
            setTimeout(progress, 4500);
        }
    }

    setTimeout(progress, 500);
};

function showResult(){
    let fileType = file.type;
    let validExtensions = ["video/mp4", "video/avi"];
    var flag;
    
    if (text.value.length <= 0)
    {
        flag = confirm("请输入身份字符串");
        if (flag == true)
        {
            window.location.replace("./")
        }
    }
    else{
        if (checkc.checked != true)
        {
            flag = confirm("请勾选复选框确认身份字符串");
            if (flag == true)
            {
                window.location.replace("./")
            }
        }
        else
        {
            if(validExtensions.includes(fileType)){
                let fileReader = new FileReader();
                fileReader.onload = ()=>{
                    let fileURL = fileReader.result;
                    //console.log(fileURL);
                    //let videoTag = '<video src="${fileURL}" alt="">';
                    
                    // var form = new FormData();
                    // form.append("file", file);
                    // $.ajax({
                    //     url: "../../file",
                    //     type: "post",
                    //     data: form,
                    //     dataType: 'json',
                    //     cache: false,
                    //     processData: false,
                    //     contentType: false,
                    //     success: function (data) {
                    //         if (data.succeed == true){
                    //             dropArea.innerHTML = "<header>上传成功</header>";
                    //         }
                    //         else{
                    //             dropArea.innerHTML = "<header>上传错误</header>";
                    //         }
                    //     }
                    // });
        
                    // dropArea.innerHTML = '<a href="../download">上传成功，点击前往下载处理结果</a>';
                    dropArea.innerHTML = '<div id="progressbar"><div class="progress-label"></div></div><div id="linkAddress"><a href="../download" id="jmpAdd"></a></div>';
                    startBar();
                }
                fileReader.readAsDataURL(file);
            }
            else{
                flag = confirm("请选择视频文件");
                if (flag == true)
                {
                    window.location.replace("./")
                }
                //console.log(fileType);
                dropArea.classList.remove("active");
            }
        }
    }
}

