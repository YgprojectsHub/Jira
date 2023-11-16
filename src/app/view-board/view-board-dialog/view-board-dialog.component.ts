import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-view-board-dialog',
  templateUrl: './view-board-dialog.component.html',
  styleUrls: ['./view-board-dialog.component.css']
})
export class ViewBoardDialogComponent implements OnInit {

  title: string = "";
  tasks: Array<string> = [""];
  tasksLoop: any = [false];
  constructor(private dialogRef: MatDialogRef<ViewBoardDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public boardService: BoardService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    debugger;
    if (this.data.editMode) {
      this.title = this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].title;
      this.tasksLoop = this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].status;
      this.tasks = this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].checklist;
    }
  }

  deleteTask(i: number) {

  }


  addTask() {
    this.tasks.push("");
    this.tasksLoop.push(false);
  }

  close() {
    this.dialogRef.close();
  }

  create() {

    if (this.tasks.some((element: string) => element === "")) {
      this._snackBar.open("Yeni Taskı Giriniz", "Ok");
    }
    else {
      debugger;
      if (!this.data.editMode) {
        this.boardService.boards[this.data.boardIndex].cards.push({
          title: this.title,
          checklist: this.tasks,
          status: this.tasksLoop
        });
      }
      else {

        this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].title = this.title;
        this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].status = this.tasksLoop;
        this.boardService.boards[this.data.boardIndex].cards[this.data.cardIndex].checklist = this.tasks;
      }

      this.boardService.updateDataToLocaleStorage();
      this.close();
    }

  }


}
