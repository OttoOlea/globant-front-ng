import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { DialogData } from '../../characters/characters/characters.component';


@Component({
  selector: 'app-pop-up-detail-dialog',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent],
  templateUrl: './pop-up-detail-dialog.component.html',
  styleUrl: './pop-up-detail-dialog.component.css'
})
export class PopUpDetailDialogComponent implements OnInit {
  

  character = 'A-Bomb (HAS)';


  ngOnInit(): void {   }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData){
  }


}

