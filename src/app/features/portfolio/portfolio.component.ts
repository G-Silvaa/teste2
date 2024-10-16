import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageModalComponent } from '../../shared/components/image-modal/image-modal.component'; 
import { softwareskills, contact, list } from './data/data';
import * as AOS from 'aos';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
 
})

export class PortfolioComponent {

  isvisible = true;  
  
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    AOS.init({
      duration: 1200, 
      once: false, 
      mirror: true 
    });
    window.addEventListener('load', () => {
      AOS.refresh();
    });
  }

  softwareskills = softwareskills;
  contact = contact;
  list = list;


  openImageModal(image: string): void {
    this.dialog.open(ImageModalComponent, {
      data: { image },
      panelClass: 'custom-dialog-container'
    });
  }

  openUrl(url: string): void {
    window.open(url, '_blank');
  }

  toggleVisibility(): void {
    this.isvisible = !this.isvisible;
  }

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
