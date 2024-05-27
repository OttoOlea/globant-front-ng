import { Component, OnInit } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PopUpDetailDialogComponent } from '../../pop-up-character/pop-up-detail-dialog/pop-up-detail-dialog.component';
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

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: '3-D Man', description: 'Rick Jones has been Hulks best bud since day one, but now hes more than a friend...hes a teammate!, symbol: H', image: '' },
  { position: 2, name: '3-D Man', description: 'Rick Jones has been Hulks best bud since day one, but now hes more than a friend...hes a teammate!, symbol: H', image: '' },
  { position: 3, name: '3-D Man', description: 'Rick Jones has been Hulks best bud since day one, but now hes more than a friend...hes a teammate!, symbol: H', image: '' },
  { position: 4, name: '3-D Man', description: 'Rick Jones has been Hulks best bud since day one, but now hes more than a friend...hes a teammate!, symbol: H', image: '' },
  { position: 5, name: '3-D Man', description: 'Rick Jones has been Hulks best bud since day one, but now hes more than a friend...hes a teammate!, symbol: H', image: '' },
  { position: 6, name: '3-D Man', description: 'Rick Jones has been Hulks best bud since day one, but now hes more than a friend...hes a teammate!, symbol: H', image: '' },
  { position: 7, name: '3-D Man', description: 'Rick Jones has been Hulks best bud since day one, but now hes more than a friend...hes a teammate!, symbol: H', image: '' },
  { position: 8, name: '3-D Man', description: 'Rick Jones has been Hulks best bud since day one, but now hes more than a friend...hes a teammate!, symbol: H', image: '' },
  { position: 9, name: '3-D Man', description: 'Rick Jones has been Hulks best bud since day one, but now hes more than a friend...hes a teammate!, symbol: H', image: '' },
  { position: 10, name: '3-D Man', description: 'Rick Jones has been Hulks best bud since day one, but now hes more than a friend...hes a teammate!, symbol: H', image: '' },
  { position: 11, name: '3-D Man', description: 'Rick Jones has been Hulks best bud since day one, but now hes more than a friend...hes a teammate!, symbol: H', image: '' },
  { position: 12, name: '3-D Man', description: 'Rick Jones has been Hulks best bud since day one, but now hes more than a friend...hes a teammate!, symbol: H', image: '' },
];

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [MatDividerModule, MatTableModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit {

  totalResults = '150';

  constructor(
    public dialog: MatDialog) {
  }

  ngOnInit(): void {

  }

  displayedColumns: string[] = ['id', 'name', 'description', 'details', 'image'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();

  openDialogDetails() {
    this.dialog.open(PopUpDetailDialogComponent, {
      data: {
        animal: 'panda',
      },
    });
  }

}
