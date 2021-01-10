import {User} from './User';
import {Company} from './Company';
import {CustomMap} from './CustomMap';

let map = new CustomMap('map');
let user = new User();
map.addMarker(user);