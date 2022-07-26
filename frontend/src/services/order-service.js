import { storageService } from "./async-storage.service.js"
import ordersJson from '../data/orders.json'
const KEY = 'orders_DB'

_createOrders()

export const orderService = {
    query,
    getById,
    remove,
    save,
}
//TODO: 
//  orderedGigs => orderService.query({userId: 'u101'})
// Order- confirm Order

function query() {
    return storageService.query(KEY)
}

function getById(id) {
    return storageService.get(KEY, id)
}

function remove(id) {
    return storageService.remove(KEY, id)
}

function save(order) {
    const savedOrder = order._id
        ? storageService.put(KEY, order)
        : storageService.post(KEY, order)
    return savedOrder
}

function _createOrders() {
    var orders = JSON.parse(localStorage.getItem(KEY))
    if (!orders || !orders.length) {
        orders = ordersJson
        localStorage.setItem(KEY, JSON.stringify(orders))
    }
    return orders
}