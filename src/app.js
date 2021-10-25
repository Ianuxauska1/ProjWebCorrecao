import Error404Screen from './screens/error404screen.js'
import HomeScreen from './screens/HomeScreen.js'
import ProductScreen from './screens/ProductScreen.js'

import { parseRequestUrl } from './utils.js'
const routes = {
   '/': HomeScreen,
    '/product/:id': ProductScreen

}


const router = () => {
    const request = parseRequestUrl()
   const parseUrl = (request.resource ? `/ ${request.resource}` : '/') + 
                               (request.id ? '/:id' : '')  +
                               (request.action? ` /${request.resource}` : '') 
const screen = routes[parseUrl] ? routes[parseUrl]: Error404Screen
    console.log(request)
    console.log(parseUrl)
    const main = document.getElementById('main-container')
    main.innerHTML = screen.render()
}

window.addEventListener('load', router)
window.addEventListener('hashchage', router)