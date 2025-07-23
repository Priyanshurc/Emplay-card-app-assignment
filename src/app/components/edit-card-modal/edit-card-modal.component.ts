import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Card } from '../../models/card.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-card-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-card-modal.component.html',
  styleUrls: ['./edit-card-modal.component.css'],
})
export class EditCardModalComponent {
  constructor(
    public dialogRef: MatDialogRef<EditCardModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Card
  ) {}

  save() {
    this.dialogRef.close(this.data);
  }

  getWordCount(): number {
    if (!this.data.description) return 0;
    return this.data.description
      .trim()
      .split(/\s+/)
      .filter(word => word.length > 0).length;
  }
}
