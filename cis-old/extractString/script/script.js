//selecting all required elements
const dropArea1 = document.querySelector(".drag-area1"),
dropArea2 = document.querySelector(".drag-area2"),
idstr = document.querySelector(".idstr"),
button1 = dropArea1.querySelector("button"),
input1 = dropArea1.querySelector("input"),
button2 = dropArea2.querySelector("button"),
input2 = dropArea2.querySelector("input");

let file1, file2;
var up1 = 0, up2 = 0;

button1.onclick = () => {
    input1.click();
}
button2.onclick = () => {
    input2.click();
}

input1.addEventListener("change", function () {
    file1 = this.files[0];
    up1 = 1;
    showResult(file1, dropArea1, 1);
});
input2.addEventListener("change", function () {
    file2 = this.files[0];
    up2 = 1;
    showResult(file2, dropArea2, 2);
});

//drag file over dragarea
dropArea1.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropArea1.classList.add("active");
});
dropArea2.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropArea2.classList.add("active");
});

//drag file out of dragarea
dropArea1.addEventListener("dragleave", () => {
    dropArea1.classList.remove("active");
});
dropArea2.addEventListener("dragleave", () => {
    dropArea2.classList.remove("active");
});

dropArea1.addEventListener("drop", (event) => {
    event.preventDefault();
    file1 = event.dataTransfer.files[0];
    up1 = 1;
    showResult(file1, dropArea1, 1);
});
dropArea2.addEventListener("drop", (event) => {
    event.preventDefault();
    file2 = event.dataTransfer.files[0];
    up2 = 1;
    showResult(file2, dropArea2, 2);
});

var check1 = 0, check2 = 0;

function startBar(seq) {
    var progressbar, progressLabel, add, speed;
    if (seq == 1) {
        progressbar = $("#progressbar1"), progressLabel = $(".progress-label1"), add = $("#succ1"), speed = 50;
    }
    else {
        progressbar = $("#progressbar2"), progressLabel = $(".progress-label2"), add = $("#succ2"), speed = 150;
    }
    
    progressbar.progressbar({
        value: false,
        change: function() {
            progressLabel.text(progressbar.progressbar("value") + "%");
        },
        complete: function() {
            progressLabel.text("完成！");
            add.text("上传成功");
            if (seq == 1) {
                check1 = 1;
            }
            else {
                check2 = 1;
            }
            if ((check1 == 1) && (check2 == 1)) {
                showString(up1, up2);
            }
        }
    });
    
    function progress() {
        var val = progressbar.progressbar("value") || 0;
        progressbar.progressbar("value", val + 1);
        if (val < 99) {
            setTimeout(progress, speed);
        }
    }
    
    setTimeout(progress, 500);
};

function showResult(file, dropArea, seq) {
    let fileType = file.type;
    let validExtensions = ["video/mp4", "video/avi"];
    var flag;

    if (validExtensions.includes(fileType)) {
        let fileReader = new FileReader();
        fileReader.onload = () => {
            let fileURL = fileReader.result;

            if (seq == 1) {
                dropArea.innerHTML = '<div id="progressbar1"><div class="progress-label1"></div></div><div id="txtBlock"><span id="succ1"></span></div>';
                startBar(1);
            }
            else {
                dropArea.innerHTML = '<div id="progressbar2"><div class="progress-label2"></div></div><div id="txtBlock"><span id="succ2"></span></div>';
                startBar(2);
            }
        }
        fileReader.readAsDataURL(file);
    }
    else {
        flag = confirm("请选择视频文件");
        if (flag == true) {
            window.location.replace("./")
        }
        dropArea.classList.remove("active");
    }
    console.log("check1");
    console.log(check1);
    console.log("check2");
    console.log(check2);
}

function startBar0() { 
    var progressbar = $("#progressbar"), progressLabel = $(".progress-label");
    
    progressbar.progressbar({
        value: false,
        change: function() {
            progressLabel.text("处理中...");
        },
        complete: function() {
            progressLabel.text("完成！");
            idstr.innerText="teambailan";
        }
    });
    
    function progress() {
        var val = progressbar.progressbar("value") || 0;
        progressbar.progressbar("value", val + 1);
        if (val < 99) {
            setTimeout(progress, 100);
        }
    }
    
    setTimeout(progress, 1000);
};

function showString(a, b){
    var flag;
    if ((a == 1) && (b == 1)){
        console.log("弹窗");
        flag = confirm("获取身份字符串");
        if (flag == true){
            startBar0();
        }
    }
}

