import { Homepage } from './pages/home.js'
import { Adminpage } from './pages/admin.js'
const routes = {
'/': Homepage,
'/admin': Adminpage,
}
function render() {
const path = location.hash.slice(1) || '/'
const page = routes[path] || Homepage
document.querySelector('#app').innerHTML = page()
}
window.addEventListener('hashchange', render)
render();