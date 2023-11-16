import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BoardService } from '../services/board.service';
import { BoardsDialogComponent } from './boards-dialog/boards-dialog.component';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {

  constructor(private matDialog: MatDialog, public boardService: BoardService) { }

  ngOnInit(): void {
  }

  openNewBoardDialog() {
    const dialogRef = this.matDialog.open(BoardsDialogComponent, {
      width: '500px'
    });
  }
  deleteBoard(index: number) {
    this.boardService.deleteBoard(index);
  }


}
