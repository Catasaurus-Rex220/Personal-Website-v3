var x = 1
function game1Images() {
    images = ["dark-souls.jpg", "dark-souls-2.webp", "dark-souls-3.webp"]
    path = 'dark-souls-images/gallery/'
    len = images.length-1
    console.log('1')

}

function game2Images() {
    images = ['darkest-1.webp','darkest-2.webp','darkest-3.webp','darkest-4.webp','darkest-5.webp','darkest-6.jpg','darkest-7.jpg']
    path = 'darkest-dungeon-images/gallery/'
    len = images.length-1

}

function nextPage() {
    x++
    if (x == len) {
        document.getElementById("full-center").src = path + images[x];
        document.getElementById("trans-left").src = path + images[x-1];
        document.getElementById("trans-right").src = path + images[0];
        x = -1
    }
    else if (x == 0) {
        document.getElementById("full-center").src = path + images[x];
        document.getElementById("trans-left").src = path + images[len];
        document.getElementById("trans-right").src = path + images[x+1]
    }
	else if (x > len) {
		x = -1
		nextPage()
	}
    else {
        document.getElementById("full-center").src = path + images[x];
        document.getElementById("trans-left").src = path + images[x-1];
        document.getElementById("trans-right").src = path + images[x+1];
    }
}   

function prevPage() {
    x--
    if (x == len) {
        document.getElementById("full-center").src = path + images[x];
        document.getElementById("trans-left").src = path + images[x-1];
        document.getElementById("trans-right").src = path + images[0];
    }
    else if (x == 0) {
        document.getElementById("full-center").src = path + images[x];
        document.getElementById("trans-left").src = path + images[len];
        document.getElementById("trans-right").src = path + images[x+1]
    }
	else if (x < 0) {
		x = len + 1
		prevPage()
	}
    else {
        document.getElementById("full-center").src = path + images[x];
        document.getElementById("trans-left").src = path + images[x-1];
        document.getElementById("trans-right").src = path + images[x+1];
    }
}   
