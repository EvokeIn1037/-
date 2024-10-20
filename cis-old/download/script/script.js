//selecting all required elements
const dropArea = document.querySelector(".drag-area"),
button = dropArea.querySelector("button");

button.onclick = ()=>{
    downloadFile("../file/test.avi","test.avi");
}

function download(href, filename = '')  {
	const a = document.createElement('a')
	a.download = filename
	a.href = href
	document.body.appendChild(a)  
	a.click()
	a.remove()
}

function downloadFile(url, filename='') {
	fetch(url, {
		headers: new Headers({
			Origin: location.origin,
	    }),
	    mode: 'cors',
	})
	.then(res => res.blob())
	.then(blob => {
		const blobUrl = window.URL.createObjectURL(blob)
		download(blobUrl, filename)
		window.URL.revokeObjectURL(blobUrl)
	})
}
