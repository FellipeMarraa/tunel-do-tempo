import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html'
})
export class DialogComponent {
  title: string;
  content: string;

  constructor(
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    this.title = data.title;
    this.content = data.content;
  }

  cancel(): void {
    this.dialogRef.close(null);
  }

  save(): void {
    const updatedData = {
      title: this.title,
      content: this.content
    };
    this.dialogRef.close(updatedData);
  }
}
