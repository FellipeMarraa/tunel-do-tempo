import {Injectable} from '@angular/core';

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
