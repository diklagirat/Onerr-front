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

//TODO: async

async function query(filterBy) {
    // const criteria = _buildCriteria(filterBy)
    // const collection = await dbService.getCollection('toy')
    // var toys = await collection.find(criteria).toArray()
    // return toys


    return filterBy ? _filter(filterBy) : storageService.query(KEY)
    // return storageService.query(KEY)
}

function _filter(filterBy) { 
    var gigs = storageService.query(KEY)
    console.log('gigs',gigs)
    const { txt } = filterBy
    // txt
    const regex = new RegExp(txt, 'i')
    var filteredGigs = gigs.filter((gig) =>   {
        console.log('gigs',gig)
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
// TODO: change to our data
function _createGigs() {
    var gigs = JSON.parse(localStorage.getItem(KEY))
    if (!gigs || !gigs.length) {
        gigs = gigsJson
        localStorage.setItem(KEY, JSON.stringify(gigs))
    }
    return gigs
}