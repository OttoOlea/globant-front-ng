import { Component, OnInit, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { Character } from '../../dto/Response';
import { ApiGlobantService } from '../../service/api-globant.service';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-pop-up-detail-dialog',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatCardModule, MatTreeModule, MatButtonModule, MatIconModule, MatTabsModule, MatTableModule],
  templateUrl: './pop-up-detail-dialog.component.html',
  styleUrl: './pop-up-detail-dialog.component.css'
})
export class PopUpDetailDialogComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name'];
  dataSource = [];
  dataSourceSerie = [];

  character: Character = {
    id: 0,
    name: '',
    description: '',
    image: {
      path: '',
      extension: ''
    },
    series: [],
    comics: []
  };

  constructor(
    private apiGlobantService: ApiGlobantService,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    console.info("Data: ", data)
  }

  ngOnInit(): void {

    this.character = {
      id: this.data.id,
      name: this.data.name,
      description: this.data.description,
      image: {
        path: this.data.image.path,
        extension: this.data.image.extension
      },
      series: this.data.series,
      comics: this.data.comics
    }

    this.dataSource = this.data.listComics;
    this.dataSourceSerie = this.data.listSeries;

    //this.apiGlobantService.getCharacterByID(this.data);

  }


}

