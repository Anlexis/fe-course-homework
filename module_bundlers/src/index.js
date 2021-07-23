import { camelCase } from 'loadsh';
// need webpack loader: process files that arent't JavaScript
import './style.scss';

console.log(camelCase("hello world"));

// webpack, Rollup, Parcel and snowpack(only rebuild changed file => faster)
//npm install --save-dev webpack webpack-cli    
//npm install --save-dev webpack-bundle-analyzer
//npm install --save-dev webpack-dev-server    
//npm install --save-dev css-loader style-loade