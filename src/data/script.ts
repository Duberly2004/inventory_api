import Category from "../models/Category"
import Product from "../models/Product"
import User from "../models/User"
import { encriptPassword } from "../others/utils/hashPassword"
const email1 = "ivanmondragonmanchay@gmail.com"
const email2 = "antonio.guzman@tecsup.edu.pe"
const email3 = "ethan.arredondo@tecsup.edu.pe"
const email4 = "pedro.hernandez@tecsup.edu.pe"
export const createUsers = async () => {
    await User.insertMany([
        {
            name:"Duberly Ivan Mondragón Manchay",
            email:"ivanmondragonmanchay@gmail.com",
            url_avatar:"https://wallpapers-clan.com/wp-content/uploads/2023/08/serious-naruto-head-sticker-preview.jpg",
            password: await encriptPassword("duberly2004"),
            role:"ADMIN"
        },
        {
            name:"Antonio Yari Guzman Giron",
            email:"antonio.guzman@tecsup.edu.pe",
            url_avatar:"https://c0.klipartz.com/pngpicture/81/638/gratis-png-hijo-goku-de-dragon-ball-z-cara-goku-thumbnail.png",
            password:await encriptPassword("antonio1234"),
            role:"ADMIN"
        },
        {
            name:"Ethan Sebastian Arredondo Yarihuaman",
            email:"ethan.arredondo@tecsup.edu.pe",
            url_avatar:"https://w7.pngwing.com/pngs/963/35/png-transparent-sasuke-uchiha-illustration-sasuke-uchiha-sakura-haruno-naruto-uzumaki-naruto-shippuden-naruto-vs-sasuke-itachi-uchiha-uchiha-sasuke-hd-black-hair-cartoons-cartoon-thumbnail.png",
            password:await encriptPassword("ethan1234"),
            role:"ADMIN"
        },
        {
            name:"Pedro Enrrique Hernandez Carhuajulca",
            email:"pedro.hernandez@tecsup.edu.pe",
            url_avatar:"https://w7.pngwing.com/pngs/482/856/png-transparent-vegeta-goku-majin-buu-dragon-ball-xenoverse-2-goku-television-photography-super.png",
            password:await encriptPassword("pedro1234"),
            role:"ADMIN"
        },
    ])
}
//------------------------------USER 1 ------------------------------

export const createCategoriesUser1 = async() =>{
    const user1 = await User.findOne({email:email1})
    await Category.insertMany([
        {name: "Teclados", color: "#4ead00", user_id: user1?.id},
        {name: "Mouses", color: "#ff5733", user_id: user1?.id},
        {name: "Audífonos", color: "#C70039", user_id: user1?.id},
        {name: "Monitores", color: "#a88100", user_id: user1?.id},
        {name: "Sillas", color: "#0011ff", user_id: user1?.id},
        {name: "Consolas", color: "#581845", user_id: user1?.id},
        {name: "Juegos", color: "#900C3F", user_id: user1?.id}
    ])
}

export const createProductsUser1 = async () => {
    const user1 = await User.findOne({email:email1})
    const categories = await Category.find({user_id:user1?._id}).exec();
    const categoryMap = categories.reduce((map:any, cat:any) => {
        map[cat.name] = cat._id;
        return map;
    }, {});

    await Product.insertMany([
        {
            name: "HyperX Alloy FPS Pro",
            description: "Teclado mecánico para juegos ultraportátil sin teclado numérico",
            price: 69.99,
            category_id: categoryMap["Teclados"],
            url_image: "https://xercom.com.pe/wp-content/uploads/2020/11/HX-KB4BL1-USWW.jpg",
            stock: 15,
            status: "Available"
        },
        {
            name: "Logitech G502 Hero",
            description: "Ratón para juegos con sensor de alta precisión y 11 botones programables",
            price: 49.99,
            category_id: categoryMap["Mouses"],
            url_image: "https://outtec.com.ar/wp-content/uploads/2020/09/5-26.jpg",
            stock: 20,
            status: "Available"
        },
        {
            name: "Razer BlackShark V2",
            description: "Audífonos para juegos con cancelación de ruido pasiva",
            price: 99.99,
            category_id: categoryMap["Audífonos"],
            url_image: "https://cdn.memorykings.pe/files/2023/09/12/337027-MK031268A-1.jpg",
            stock: 10,
            status: "Available"
        },
        {
            name: "ASUS VG248QE",
            description: "Monitor para juegos de 24 pulgadas, 144Hz con tecnología FreeSync",
            price: 179.99,
            category_id: categoryMap["Monitores"],
            url_image: "https://www.asus.com/media/global/products/2HXZjR1YHYisBKrM/dPoJuPZeS1Trkra8_480.jpg",
            stock: 8,
            status: "Available"
        },
        {
            name: "Secretlab Titan",
            description: "Silla ergonómica para juegos diseñada para el máximo confort",
            price: 429.99,
            category_id: categoryMap["Sillas"],
            url_image: "https://ytuloquieres.pe/wp-content/uploads/2023/01/secretlab-titan-evo-2022-frost-blue-gaming-chair-reclining-ergonomic-.jpg",
            stock: 5,
            status: "Available"
        },
        {
            name: "PlayStation 5",
            description: "Consola de juegos de última generación con soporte para gráficos en 4K",
            price: 499.99,
            category_id: categoryMap["Consolas"],
            url_image: "https://home.ripley.com.pe/Attachment/WOP_5/2031331143423/2031331143423_2.jpg",
            stock: 12,
            status: "Available"
        },
        {
            name: "The Witcher 3: Wild Hunt",
            description: "Videojuego de rol y aventura en un vasto mundo abierto",
            price: 39.99,
            category_id: categoryMap["Juegos"],
            url_image: "https://image.api.playstation.com/vulcan/ap/rnd/202212/0814/9uU0gBq02jmXHtDsm82AV722.jpg",
            stock: 30,
            status: "Available"
        }
    ]);
}
//------------------------------USER 2 ------------------------------
export const createCategoriesUser2 = async () => {
    const user2 = await User.findOne({ email: email2 });
    
    await Category.insertMany([
        { name: "Tarjetas Gráficas", color: "#FF5733", user_id: user2?.id },
        { name: "Dispositivos de Almacenamiento", color: "#C70039", user_id: user2?.id },
        { name: "Software", color: "#FFC300", user_id: user2?.id },
        { name: "Realidad Virtual", color: "#DAF7A6", user_id: user2?.id },
        { name: "Accesorios Gaming", color: "#581845", user_id: user2?.id },
        { name: "Periféricos", color: "#900C3F", user_id: user2?.id }
    ]);
}


export const createProductsUser2 = async () => {
    const user2 = await User.findOne({ email: email2 });
    const categories = await Category.find({ user_id: user2?._id }).exec();
    
    const categoryMap = categories.reduce((map:any, cat:any) => {
        map[cat.name] = cat._id;
        return map;
    }, {});

    await Product.insertMany([
        {
            name: "NVIDIA RTX 3080",
            description: "Tarjeta gráfica de alto rendimiento para gaming y creadores de contenido",
            price: 699.99,
            category_id: categoryMap["Tarjetas Gráficas"],
            url_image: "https://sahuaperu.com.pe/wp-content/uploads/2022/09/MSI-GEFORCE-RTX-3080-GAMING-Z-TRIO-12G-LHR-12GB-912-V389-405-a.jpg",
            stock: 10,
            status: "Available"
        },
        {
            name: "Samsung SSD 1TB",
            description: "Disco duro sólido de alta velocidad y 1TB de capacidad",
            price: 109.99,
            category_id: categoryMap["Dispositivos de Almacenamiento"],
            url_image: "https://www.yamoshi.com.pe/24834-large_default/disco-solido-m2-samsung-970-evo-plus-1tb-mz-v7s1t0bam-80mm.jpg",
            stock: 20,
            status: "Available"
        },
        {
            name: "Windows 10 Pro",
            description: "Sistema operativo optimizado para seguridad y funcionalidad",
            price: 199.99,
            category_id: categoryMap["Software"],
            url_image: "https://www.vhv.rs/dpng/d/15-157622_windows-10-pro-hd-png-download.png",
            stock: 15,
            status: "Available"
        },
        {
            name: "Oculus Quest 2",
            description: "Gafas de realidad virtual autónomas y sin necesidad de PC",
            price: 299.99,
            category_id: categoryMap["Realidad Virtual"],
            url_image: "https://w7.pngwing.com/pngs/58/1021/png-transparent-oculus-quest-2-electronics-vr-headsets.png",
            stock: 8,
            status: "Available"
        },
        {
            name: "RGB Gaming Mousepad",
            description: "Alfombrilla de ratón con iluminación RGB y superficie optimizada",
            price: 29.99,
            category_id: categoryMap["Accesorios Gaming"],
            url_image: "https://atlas-content-cdn.pixelsquid.com/assets_v2/284/2845099133482570906/jpeg-600/G03.jpg",
            stock: 30,
            status: "Available"
        },
        {
            name: "Logitech G Pro Keyboard",
            description: "Teclado mecánico profesional para gamers y e-sports",
            price: 129.99,
            category_id: categoryMap["Periféricos"],
            url_image: "https://resource.logitech.com/content/dam/gaming/en/products/pro-keyboard/pro-clicky-gallery-1.png",
            stock: 12,
            status: "Available"
        }
    ]);
}


//------------------------------USER 3 ------------------------------

export const createCategoriesUser3 = async () => {
    const user3 = await User.findOne({ email: email3 });
    
    await Category.insertMany([
        { name: "Portátiles Gaming", color: "#0D47A1", user_id: user3?.id },
        { name: "Cámaras Web", color: "#BF360C", user_id: user3?.id },
        { name: "Micrófonos", color: "#1B5E20", user_id: user3?.id },
        { name: "Sistemas de Enfriamiento", color: "#006064", user_id: user3?.id },
        { name: "Iluminación LED", color: "#311B92", user_id: user3?.id },
        { name: "Tarjetas de Sonido", color: "#FF6F00", user_id: user3?.id }
    ]);
}


export const createProductsUser3 = async () => {
    const user3 = await User.findOne({ email: email3 });
    const categories = await Category.find({ user_id: user3?._id }).exec();
    
    const categoryMap = categories.reduce((map:any, cat:any) => {
        map[cat.name] = cat._id;
        return map;
    }, {});

    await Product.insertMany([
        {
            name: "ASUS ROG Zephyrus G14",
            description: "Portátil ultra delgado para gaming con gráficos NVIDIA RTX 2060",
            price: 1449.99,
            category_id: categoryMap["Portátiles Gaming"],
            url_image: "https://dojiw2m9tvv09.cloudfront.net/73209/product/42691.png",
            stock: 5,
            status: "Available"
        },
        {
            name: "Logitech C920 HD Pro",
            description: "Cámara web de alta definición para streaming y videoconferencias",
            price: 79.99,
            category_id: categoryMap["Cámaras Web"],
            url_image: "https://www.cabeperu.com/3204-home_default/camara-logitech-c920s-pro-hd-black-960-001257.jpg",
            stock: 20,
            status: "Available"
        },
        {
            name: "Blue Yeti USB Microphone",
            description: "Micrófono profesional USB con patrones polares múltiples",
            price: 129.99,
            category_id: categoryMap["Micrófonos"],
            url_image: "https://c1.klipartz.com/pngpicture/515/351/sticker-png-microphone-blue-microphones-yeti-blue-microphones-snowball-ice-blue-microphones-yeti-pro-pop-filter-recording-studio-usb-microphone-audio-equipment-thumbnail.png",
            stock: 15,
            status: "Available"
        },
        {
            name: "Corsair H100i RGB PLATINUM",
            description: "Sistema de enfriamiento líquido con iluminación RGB para CPU",
            price: 159.99,
            category_id: categoryMap["Sistemas de Enfriamiento"],
            url_image: "https://electronicstore.com.pe/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/-/c/-cw-9060039-ww-gallery-h100i-rgb-platinum-01.png",
            stock: 10,
            status: "Available"
        },
        {
            name: "Philips Hue Play",
            description: "Barra de luces LED inteligente para entretenimiento y ambiente",
            price: 129.99,
            category_id: categoryMap["Iluminación LED"],
            url_image: "https://static.casadomo.com/media/2018/11/philips-hue-play-asistente-voz-portada.png",
            stock: 25,
            status: "Available"
        },
        {
            name: "Creative Sound Blaster Z",
            description: "Tarjeta de sonido interna de alta fidelidad con soporte de audio 5.1",
            price: 99.99,
            category_id: categoryMap["Tarjetas de Sonido"],
            url_image: "https://w7.pngwing.com/pngs/487/248/png-transparent-sound-blaster-audigy-microphone-sound-blaster-x-fi-sound-cards-audio-adapters-creative-sound-blaster-z-microphone-electronics-microphone-cable-thumbnail.png",
            stock: 12,
            status: "Available"
        }
    ]);
}

//------------------------------USER 4 ------------------------------

export const createCategoriesUser4 = async () => {
    const user4 = await User.findOne({ email: email4 });
    
    await Category.insertMany([
        { name: "Procesadores", color: "#004D40", user_id: user4?.id },
        { name: "Placas Base", color: "#1A237E", user_id: user4?.id },
        { name: "Memoria RAM", color: "#BF360C", user_id: user4?.id },
        { name: "Wearables", color: "#006064", user_id: user4?.id },
        { name: "Fuentes de Poder", color: "#F57F17", user_id: user4?.id },
        { name: "Cajas PC", color: "#3E2723", user_id: user4?.id }
    ]);
}


export const createProductsUser4 = async () => {
    const user4 = await User.findOne({ email: email4 });
    const categories = await Category.find({ user_id: user4?._id }).exec();
    
    const categoryMap = categories.reduce((map:any, cat:any) => {
        map[cat.name] = cat._id;
        return map;
    }, {});

    await Product.insertMany([
        {
            name: "AMD Ryzen 9 5950X",
            description: "Procesador de 16 núcleos y 32 hilos con arquitectura Zen 3",
            price: 799.99,
            category_id: categoryMap["Procesadores"],
            url_image: "https://pcexpress.pe/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/p/cpam4r95950x.jpg",
            stock: 5,
            status: "Available"
        },
        {
            name: "ASUS ROG Crosshair VIII Hero",
            description: "Placa base gaming con soporte para AMD Ryzen y PCIe 4.0",
            price: 379.99,
            category_id: categoryMap["Placas Base"],
            url_image: "https://dlcdnwebimgs.asus.com/files/media/6E2741FD-9665-46E9-9D2B-1DAA67590550/v1/img/cooling/headers/headers-pd.png",
            stock: 8,
            status: "Available"
        },
        {
            name: "Corsair Vengeance RGB Pro 32GB",
            description: "Memoria RAM DDR4 de alta velocidad con iluminación RGB",
            price: 154.99,
            category_id: categoryMap["Memoria RAM"],
            url_image: "https://assets.corsair.com/image/upload/akamai/pdp/vengeance-rgb-pro/Content/Vengeance_RGB_Pro_PDP_Black_04.png",
            stock: 12,
            status: "Available"
        },
        {
            name: "Apple Watch Series 7",
            description: "Reloj inteligente con monitorización de salud y conectividad LTE",
            price: 399.99,
            category_id: categoryMap["Wearables"],
            url_image: "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111909_series7-480.png",
            stock: 10,
            status: "Available"
        },
        {
            name: "Seasonic Focus GX-850",
            description: "Fuente de poder de 850W 80 Plus Gold con modo sin ventilador",
            price: 129.99,
            category_id: categoryMap["Fuentes de Poder"],
            url_image: "https://seasonic.com/pub/media/wysiwyg/feature-pics/FOCUS-PX-feature.png",
            stock: 7,
            status: "Available"
        },
        {
            name: "NZXT H510 Elite",
            description: "Caja de PC ATX de alta gama con panel frontal y lateral de vidrio templado",
            price: 149.99,
            category_id: categoryMap["Cajas PC"],
            url_image: "https://gamesworld.ae/wp-content/uploads/2024/02/1615558645-h510-elite-black-blac.png",
            stock: 6,
            status: "Available"
        }
    ]);
}

