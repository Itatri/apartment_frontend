import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface Room {
    _id?: string;
    name: string;
    price: number;
    status: string;
}

@Injectable({
    providedIn: "root"
})
export class RoomService {
    private baseUrl = "http://localhost:5000/api/rooms";

    constructor(private http: HttpClient) {}

    getRooms(): Observable<Room[]> {
        return this.http.get<Room[]>(this.baseUrl);
    }

    addRoom(room: Room): Observable<Room> {
        return this.http.post<Room>(this.baseUrl, room);
    }

    updateRoom(room: Room): Observable<Room> {
        return this.http.put<Room>( `${this.baseUrl}/${room._id}`, room);
    }

    deleteRoom(id: string): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`);
    }

    
}