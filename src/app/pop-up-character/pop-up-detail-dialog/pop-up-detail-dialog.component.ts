import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { DialogData } from '../../characters/characters/characters.component';
import { MatCardModule } from '@angular/material/card';
import { Character, ResponseGlobant } from '../../dto/Response';
import { ApiGlobantService } from '../../service/api-globant.service';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TreeDetail } from '../../dto/EntityUtil';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-pop-up-detail-dialog',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatCardModule, MatTreeModule, MatButtonModule, MatIconModule],
  templateUrl: './pop-up-detail-dialog.component.html',
  styleUrl: './pop-up-detail-dialog.component.css'
})
export class PopUpDetailDialogComponent implements OnInit {

  dataSource = [];
  dataSourceSerie = [];

  treeDetail: TreeDetail[] = [
    {
      name: 'Comics',
      Serie: []
    },
    {
      name: 'Series',
      Comic: []
    }
  ]

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
    @Inject(MAT_DIALOG_DATA) public data: Character) {

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

    this.treeDetail = [
      {
        name: 'Comics',
        Comic: this.data.comics
      },
      {
        name: 'Serie',
        Serie: this.data.series
      }
    ]


    //this.dataSource.data = this.treeDetail;

    //this.apiGlobantService.getCharacterByID(this.data);

  }


}

