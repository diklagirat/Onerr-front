import { storageService } from './async-storage.service.js'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
var gWatchedUser = null

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    getUsers,
    getById,
    remove,
    update,
}

// TODO:_createUsers() - read json file from data 

// Debug technique
// window.userService = userService

function getUsers() {
    return storageService.query('user')
}

async function getById(userId) {
    const user = await storageService.get('user', userId)
    gWatchedUser = user
    return user
}
function remove(userId) {
    return storageService.remove('user', userId)
}

async function update(user) {
}

async function login(userCred) {
    // TODO:
}

async function signup(userCred) {
    // TODO:
}

async function logout() {
    // TODO:
}

function _saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || 'null')
}

