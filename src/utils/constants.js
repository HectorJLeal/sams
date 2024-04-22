// Pdfs
export const pdfs = [
    "Preciador garantía extendida SM",
    "Contrato garantía extendida",
    "Preciador GE Sams carta"   
]

//Images

export const imgs = [
    "Elegibles",
]


//Comics
export const comics = [
    "Historieta electricos",
]

//Videos
export const videos = [
    "Video SM celulares-tablet",
    "Video SM computo",
    "Video SM electronica",
    "Video SM linea blanca",
    "Video SM Pantallas"
]

//Pages

export const pages = {
    Documentos: "/documentsPage",
    Imagenes: "/imagesPage",
    Historietas: "/comicsPage",
    Videos: "/videosPage"
};

//Keys

export const keys = Object.keys(pages)


//Urls

export const Urls = [
    "/assets/comics/HistorietaElectricos.jpg",
    "/assets/imagenes/Elegibles.png",
    "/assets/pdfs/ContratoGarantíaExtendida.pdf",
    "/assets/pdfs/PreciadorGarantíaExtendidaSM.pdf",
    "/assets/pdfs/PreciadorGESamsCarta.pdf",
    "/assets/videos/VideoSMCelulares-tablets.mp4",
    "/assets/videos/VideoSMComputo.mp4",
    "/assets/videos/VideoSMPantallas.mp4",
    "/assets/videos/VideoSMLineaBlanca.mp4",
    "/assets/videos/VideoSMElectronica.mp4"
]

//Function

  // Función para limpiar el título y la URL para hacer coincidir
 export const cleanString = (str) => {
    return str.toLowerCase().replace(/\s+/g, ''); // Elimina espacios y convierte a minúsculas
};