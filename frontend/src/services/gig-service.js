import { storageService } from "./async-storage.service.js"
import gigsJson from '../data/gigs.json'
const KEY = 'gig_DB'

export const gigService = {
    query,
    getById,
    remove,
    save,
    getEmptyGig,
    getAllTags
}
_createGigs()

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

function isPrimaryTag(tag) {
    return gAllTags.slice(0, 3).includes(tag)
}
async function getAllTags() {
    return gAllTags

}

async function query(filterBy) {

    return filterBy ? _filter(filterBy) : storageService.query(KEY)
}

function _filter(filterBy) {
    var gigs = storageService.query(KEY)
    const { txt } = filterBy
    const regex = new RegExp(txt, 'i')
    var filteredGigs = gigs.filter((gig) => {
        console.log('gigs', gig)
    })

    return Promise.resolve(filteredGigs)
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
function _createGigs() {
    var gigs = JSON.parse(localStorage.getItem(KEY))
    if (!gigs || !gigs.length) {
        gigs = gigsJson
        localStorage.setItem(KEY, JSON.stringify(gigs))
    }
    return gigs
}