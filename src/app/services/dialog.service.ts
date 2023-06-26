import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private dialogData: string = '';

  setDialogData(data: any): void {
    this.dialogData = data;
  }

  getDialogData(): string {
    return this.dialogData;
  }
}
