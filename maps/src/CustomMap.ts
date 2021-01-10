import {User} from "./User";
import {Company} from "./Company";

export interface Mappable {
    location: {
        lat: number,
        lng: number
    }
    markerContent(): string;
}

export class CustomMap {
    private googleMap: google.maps.Map | undefined;

    constructor(divId: string) {
        const el: HTMLElement | null = document.getElementById(divId);
        if (el) {
            this.googleMap = new google.maps.Map(el, {
                zoom: 5,
                center: {
                    lat: 53,
                    lng: 10
                },
            });
        }

    }

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });
            infoWindow.open(this.googleMap, marker);
        });
    }


}