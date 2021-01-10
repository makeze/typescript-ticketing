import {User} from './User';
import {Company} from './Company';
import {CustomMap} from './CustomMap';

let map = new CustomMap('map');
let user = new User();
let company = new Company();
map.addMarker(user);
map.addMarker(company);