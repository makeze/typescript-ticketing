import {User} from "./User";
import {Company} from "./Company";

interface Mappable {
    location: {
        lat: number,
        lng: number
    }
}

export class CustomMap {
    private googleMap: google.maps.Map | null;

    constructor(divId: string) {
        const el = document.getElementById(divId);
        if (el) {
            this.googleMap = new google.maps.Map(el, {
                zoom: 5,
                center: {
                    lat: 53,
                    lng: 10
                },
            });
        } else {
            this.googleMap = null;
        }
    }

    addMarker(mappable: Mappable): void {
        if(this.googleMap) {
            new google.maps.Marker({
                map: this.googleMap,
                position: {
                    lat: mappable.location.lat,
                    lng: mappable.location.lng
                }
            });
        }
    }
}