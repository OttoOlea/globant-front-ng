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
  responseCharacter: any = {};

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

    this.apiGlobantService.getCharacterByID(this.data.id)
      .subscribe(data => {
        console.log("DataResult: ", data)

        this.responseCharacter = data.resultList[0]

        this.character = {
          id: this.responseCharacter.id,
          name: this.responseCharacter.name,
          description: this.responseCharacter.description,
          image: {
            path: this.responseCharacter.image.path,
            extension: this.responseCharacter.image.extension
          },
          series: this.responseCharacter.series,
          comics: this.responseCharacter.comics
        }

        this.dataSource = this.responseCharacter.listComics;
        this.dataSourceSerie = this.responseCharacter.listSeries;

      }, error => {
        console.log('Error-HttpClient: ', error)
      });

  }


}

