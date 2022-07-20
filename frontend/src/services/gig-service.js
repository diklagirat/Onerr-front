import { storageService } from "./async-storage.service.js"

// import gigs from "./ json"
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
        // TODO: gigs = gigs
        localStorage.setItem(KEY, JSON.stringify(toys))
    }
    return toys
}

