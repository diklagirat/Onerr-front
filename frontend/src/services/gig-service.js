import { httpService } from './http.service'

const ENDPOINT = 'gig'

var gAllTags = [
    'Architecture & Interior Design',
    'Logo Animation',
    'Family & Genealogy',
    'Social Media Marketing',
    'Personal Stylists',
    'LinkedIn Profiles',
    'Book Cover Design',
    'Logo Design',
]
async function query() {
    var gigs = await httpService.get(ENDPOINT)
    return gigs
}

async function getAllTags() {
    return gAllTags
}

async function save(gig) {
    var gig = JSON.parse(JSON.stringify(gig));
    return await httpService.put(`${ENDPOINT}/${gig._id}`, gig)
}

async function add(gig) {
    return await httpService.post(ENDPOINT, gig);
}

function remove(gigId) {
    return httpService.delete(`gig/${gigId}`)
}

async function getById(gigId) {
    const gig = await httpService.get(`gig/${gigId}`)
    console.log('gigById', gig)
    return gig
}

export const gigService = {
    query,
    getById,
    add,
    remove,
    save,
    getAllTags
}