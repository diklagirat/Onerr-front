import { storageService } from './async-storage.service.js'
// import { httpService } from './http.service'

const ENDPOINT = 'user'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
// var gWatchedUser = null
import usersJson from '../data/users.json'
const KEY = 'user_DB'

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

_createUsers()

// TODO:_createUsers() - read json file from data 

// Debug technique
// window.userService = userService

async function getUsers() {
    // return await httpService.get(ENDPOINT)
    return storageService.query(KEY)
}

function getById(id) {
    return storageService.get(KEY, id)
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

function _createUsers() {
    var users = JSON.parse(localStorage.getItem(KEY))
    if (!users || !users.length) {
        users = usersJson
        localStorage.setItem(KEY, JSON.stringify(users))
    }
    return users
}

