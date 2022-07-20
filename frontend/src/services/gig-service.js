import { storageService } from "./async-storage.service.js"
import gigsJson from '../data/gigs.json'
const KEY = 'gig_DB'

export const gigService = {
    query,
    getById,
    remove,
    save,
    getEmptyGig,
}
_createGigs()

function query() {
    return storageService.query(KEY)
}

function getById(id) {
    return storageService.get(KEY, id)
}

function remove(id) {
    return storageService.remove(KEY, id)
}

function save(gig) {
    const savedGig = gig._id
        ? storageService.put(KEY, gig)
        : storageService.post(KEY, gig)
    return savedGig
}

function getEmptyGig() {
    return {

    }
}
// TODO: change to our data
function _createGigs() {
    var gigs = JSON.parse(localStorage.getItem(KEY))
    if (!gigs || !gigs.length) {
        gigs = gigsJson
        localStorage.setItem(KEY, JSON.stringify(gigs))
    }
    return gigs
}

// gGigs = [
//     {
//         _id: "i101",
//         title: "I will do hyper realistic pencil portrait by hand drawing",
//         price: 16.84,
//         owner: {
//           _id: "u101",
//           fullname: "frederickkessie",
//           imgUrl: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/4abf6f5b58e4d78cfb7c410cf8d7a9ac-1626111679444/4a04b77c-22ee-4ce8-b4be-747fd059e9ff.jpg",
//           level: "basic/premium",
//           rate: 4
//         },
//         daysToMake: 2,
//         description: "Hello ! Much obliged for visiting my gig :)\nIn this gig I'm offering you an exceptionally 3 one of a kind, best and reasonable bundles.\nIn case you are thinking for giving somebody uncommon an extremely delightful, eye getting gift( hyper practical hand drawing pencil sketch picture)?\nKindly select the helpful bundle and submit your request at this moment and I'll give you an ideal picture sketch, hand drawing, practical drawing, pencil attracting high goal JPEG/PNG advanced document.\nI will give hand-drawn dark and White or hued reasonable pictures.\nSympathetically give me clear reference photograph however much as could be expected.\nThe material I utilized for Creating pencil representations are:\nDrawing materials: graphite pencil, charcoal, Bristol paper, mono eraser, brush, mixing stump, mechanical pencil, graphite powder and so on .\nYou can give me anything:\nPicture photographs\nFamily photographs\nCreature photographs\nAny item photographs\nScene photographs\nEngineering photographs\nAnything you envision\nKindly reach me prior to submitting your request! Much appreciated.\nI DO NOT DELIVER ORIGINAL PHYSICAL COPY BUT A HIGH RESOLUTION JPEG DIGITA",
//         imgUrl: ["https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/231682055/original/77cc585046a1ceb81a809218fef35ee8252bbb3b.jpg"],
//         tags: ["pencil drawing", "realistic drawing", "hand drawing", "portrait drawing", "pencil sketch"],
//         likedByUsers: ["mini-user"] 
//       },
//       {
//         "_id": "i102",
//         "title": "I will do hyper realistic pencil sketch portrait by hand drawing",
//         "price": 67.37,
//         "owner": {
//           "_id": "u102",
//           "fullname": "vividstore",
//           "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/83cc7c97f9873bdb052590a94d32f84c-1576419363871/ed47443e-0f9b-42ab-beaf-ec0a0acccfe8.jpeg",
//           "level": "basic/premium",
//           "rate": 4
//         },
//         "daysToMake": 3,
//         "description": "Hey ! Thanks for visiting my gig :)\nIn this gig i'm offering you a very 3 unique, preferable and affordable packages.\nIf you are thinking for giving someone special a very beautiful, eye catching gift( hyper realistic hand drawing pencil sketch portrait)?\nPlease select the desirable package and place your order right now and i'll give you a perfect portrait sketch, hand drawing, realistic drawing,pencil drawing in high resolution JPEG/PNG digital file.\nI will provide hand-drawn black & White or colored realistic portraits.\nKindly provide me clear reference photo as much as possible.\nThe material I used for Creating pencil portraits are:\nDrawing materials: graphite pencil, charcoal, Bristol paper, tombomono eraser, brush, blending stump, mechanical pencil, graphite powder etc .\nYou can give me anything:\nPortrait photos\nFamily photos\nAnimal photos\nAny product photos\nLandscape photos\nArchitecture photos\nAnything you imagine\nPlease contact me before placing your order! Thanks.\nI DO NOT DELIVER ORIGINAL PHYSICAL COPY BUT A HIGH RESOLUTION JPEG DIGITAL FILE, IF YOU WANT THE ORIGINAL ONE THEN MESSAGE ME FOR DETAILS.\nFeel free to ask me anything! :)\nThank You...\nvividstore",
//         "imgUrl": ["https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/197422311/original/1907136f4b9684daa164acfa5cfedc6035b771b1.jpg"],
//         "tags": ["pencil drawing", "realistic drawing", "pencil portrait", "sketch", "pencil sketch"],
//         "likedByUsers": ["mini-user"] 
//       },
//       {
//         "_id": "i103",
//         "title": "I will draw a hyperrealistic portrait of face or entire body and animals",
//         "price": 202.11,
//         "owner": {
//           "_id": "u103",
//           "fullname": "andreacarvalho",
//           "imgUrl": "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/5344c10fd4820db3626c4fc24968783d-1588608774469/1e4a3bd9-b71d-48ce-8ac0-0ff6d667caf4.jpeg",
//           "level": "basic/premium",
//           "rate": 4
//         },
//         "daysToMake": 3,
//         "description": "Desenho de lápis hiperrealista da sua foto, posso adicionar detalhes de fundo e personalizar o desenho do jeito que você quiser.",
//         "imgUrl": ["https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/155512325/original/9d62fbdec2b0bffd0318f9af43c2de023b62f5f0.jpg"],
//         "tags": ["pencil", "drawing", "portrait", "realistic", "painting"],
//         "likedByUsers": ["mini-user"] 
//       }
// ]

