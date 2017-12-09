

// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').load({ path: '../../variables.env' });
//   //require('dotenv').config({ path: 'variables.env' });
// }
//
// var map = function(){
// staticMap = process.env.MAP_KEY;
// mapboxgl.accessToken = staticMap;
// var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/firebuggirl/cj94md3tt098k2ssa3kemjcn6',
//     zoom: 7.51,
//     center: [-116.495811, 33.352410]
// });
//
// var layerList = document.getElementById('menu');
// var inputs = layerList.getElementsByTagName('input');
//
// console.log(staticMap);
// };


var maptest = document.getElementById('test');
maptest.appendChild(map());
