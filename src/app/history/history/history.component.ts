import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit {

  displayedColumns: string[] = ['id', 'action', 'date', 'detail'];
  dataSource = [
    { id: 1, action: 'INSERT', date: '12/12/2024T00:00:00', detail: 'insert for SQL' },
    { id: 1, action: 'INSERT', date: '12/12/2024T00:00:00', detail: 'insert for SQL' },
    { id: 1, action: 'INSERT', date: '12/12/2024T00:00:00', detail: 'insert for SQL' },
    { id: 1, action: 'INSERT', date: '12/12/2024T00:00:00', detail: 'insert for SQL' },
    { id: 1, action: 'INSERT', date: '12/12/2024T00:00:00', detail: 'insert for SQL' },
    { id: 1, action: 'INSERT', date: '12/12/2024T00:00:00', detail: 'insert for SQL' },
    { id: 1, action: 'INSERT', date: '12/12/2024T00:00:00', detail: 'insert for SQL' },
  ];

  ngOnInit(): void {

  }

}
