import { Component, OnInit } from '@angular/core';
import { UserItemComponent } from '../user-item/user-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserItemComponent, CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit{
  items: Array<string>;
  constructor(){
    this.items = ['Fahmi', 'Kahlaoui', '8003 21e Avenue', 'Montréal']
  }
  ngOnInit(): void {
  }

}
