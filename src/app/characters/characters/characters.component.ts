import { Component, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { PopUpDetailDialogComponent } from '../../pop-up-character/pop-up-detail-dialog/pop-up-detail-dialog.component';
import { ApiGlobantService } from '../../service/api-globant.service';
//import { CallApiMarvelService } from '../services/call-api-marvel.service';

export interface PeriodicElement {
  name: string;
  position: number;
  description: string;
  image: string;
}

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [MatDividerModule, MatTableModule, MatTabsModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit {

  totalResults = '150';
  responseGlobant: any;
  jsonResponse: any;

  displayedColumns: string[] = ['id', 'name', 'description'];
  dataSource = [];
  clickedRows = new Set<PeriodicElement>();

  constructor(
    private apiGlobantService: ApiGlobantService,
    public dialog: MatDialog) {
  }

  ngOnInit(): void {

    this.apiGlobantService.getAllCharacter()
      .subscribe(data => {
        this.responseGlobant = data;
        this.dataSource = this.responseGlobant.resultList;

      });

  }


  openDialogDetails(element: any) {
    console.log("Element: ", element),

    this.dialog.open(PopUpDetailDialogComponent, {
      data: element,
    });
  }



}
