import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { image: string },
    private dialogRef: MatDialogRef<ImageModalComponent>
  ) {
    // Adiciona o ouvinte para o evento backdropClick
    this.dialogRef.backdropClick().subscribe(() => {
      this.closeModal();
    });
  }

  closeModal(): void {
    this.dialogRef.close();
  }
}