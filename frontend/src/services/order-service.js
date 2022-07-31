import { httpService } from './http.service'

const ENDPOINT = 'order'

//TODO: 
//  orderedGigs => orderService.query({userId: 'u101'})
// Order- confirm Order

async function query() {
    return await httpService.get(ENDPOINT)
}

async function getById(orderId) {
    return await httpService.get(`gig/${orderId}`)
}

function remove(id) {
    return storageService.remove(KEY, id)
}

function save(order) {
    console.log(order._id)
    const savedOrder = order._id
        ? storageService.put(KEY, order)
        : storageService.post(KEY, order)
    return savedOrder
}

export const orderService = {
    query,
    getById,
    remove,
    save,
    getById
}