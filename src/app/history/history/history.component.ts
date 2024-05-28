import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ApiGlobantService } from '../../service/api-globant.service';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit {

  constructor(
    private apiGlobantService: ApiGlobantService
  ) {

  }

  displayedColumns: string[] = ['id', 'action', 'date', 'details'];
  dataSource = [];

  ngOnInit(): void {

    this.apiGlobantService.getHistory()
      .subscribe(data => {
        console.log(data);

        this.dataSource = data;

      })

  }

}
