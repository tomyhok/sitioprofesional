function enviarWhatsApp() {
    var nombre = document.getElementById('nombre').value;
    var asunto = document.getElementById('asunto').value;
    var mensaje = document.getElementById('mensaje').value;

    var mensajeWhatsapp = `Nombre: ${nombre}\nAsunto: ${asunto}\nMensaje: ${mensaje}`;
    var numeroTelefono = '541170042688';
    var whatsappURL = `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${encodeURIComponent(mensajeWhatsapp)}`;

    window.open(whatsappURL, '_blank');
}


var banderaCarousel = false;

function izqCarousel() {
    if (banderaCarousel == false) {
        document.getElementById("imagen_izq").src="images/carousel/carimg4.jpeg"
        document.getElementById("imagen_cen").src="images/carousel/carimg5.jpeg"
        document.getElementById("imagen_der").src="images/carousel/carimg6.jpeg"
        banderaCarousel = true;
    } else {
        document.getElementById("imagen_izq").src="images/carousel/carimg2.jpeg"
        document.getElementById("imagen_cen").src="images/carousel/carimg1.jpeg"
        document.getElementById("imagen_der").src="images/carousel/carimg3.jpeg"
        banderaCarousel = false;
    }
}

function derCarousel() {
    if (banderaCarousel == false) {
        document.getElementById("imagen_izq").src="images/carousel/carimg4.jpeg"
        document.getElementById("imagen_cen").src="images/carousel/carimg5.jpeg"
        document.getElementById("imagen_der").src="images/carousel/carimg6.jpeg"
        banderaCarousel = true;
    } else {
        document.getElementById("imagen_izq").src="images/carousel/carimg2.jpeg"
        document.getElementById("imagen_cen").src="images/carousel/carimg1.jpeg"
        document.getElementById("imagen_der").src="images/carousel/carimg3.jpeg"
        banderaCarousel = false;
    }
}

var banderaSidebar = false;

function sidebar() {
    if (banderaSidebar == false) {
        document.getElementById("botones_nav").style.width="20vw";
        document.getElementById("sidebar").style.backgroundColor="#000000a0";
        banderaSidebar = true;
    } else {
        document.getElementById("botones_nav").style.width="0vw";
        document.getElementById("sidebar").style.backgroundColor="#00000000";
        banderaSidebar = false;
    }
}