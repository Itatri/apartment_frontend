import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoomService, Room } from '../../services/room.service';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './room-list.html',
  styleUrl: './room-list.css'
})
export class RoomList {
  rooms : Room[] = [];
  newRoom: Room = { name : '', price: 0, status : 'available' };


  constructor(private roomService: RoomService) {}

  ngOnInit() {
    this.loadRooms();
  }

  loadRooms() {
    this.roomService.getRooms().subscribe( res => {
      this.rooms = res;
    }  );
  }

  addRoom() {
    this.roomService.addRoom(this.newRoom).subscribe( () => {
      this.newRoom = { name: '', price: 0, status: 'available' };
      this.loadRooms();
    });
  }

  updateRoom(room: Room) {
    if (!room._id) {
      console.error('Room ID is required for update');
      return;
    }
    this.roomService.updateRoom(room).subscribe(() => {
      this.loadRooms();
    });
  }

  deleteRoom(id: string){
    this.roomService.deleteRoom(id).subscribe(() => {
      this.loadRooms();
    })
  }

}
