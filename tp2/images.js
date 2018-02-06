function changeImage(id) {
    switch(id) {
		case "v8":
			document.getElementById('v8').setAttribute("src", "./images/Veigar_8.jpg");
			break;
		case "a0":
			document.getElementById('a0').setAttribute("src", "./images/Ahri_0.jpg");
			break;
		case "b0":
			document.getElementById('b0').setAttribute("src", "./images/Blitzcrank_0.jpg");
			break;
		case "a4":
			document.getElementById('a4').setAttribute("src", "./images/Ahri_4.jpg");
			break;
		case "b3":
			document.getElementById('b3').setAttribute("src", "./images/Blitzcrank_3.jpg");
			break;
		case "v1":
			document.getElementById('v1').setAttribute("src", "./images/Veigar_1.jpg");
			break;
	}
}