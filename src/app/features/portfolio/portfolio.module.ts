import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { LoginAdminRoutingModule } from './portfolio-routing.module';








@NgModule({
  declarations: [PortfolioComponent],
  
  imports: [
    CommonModule,
    LoginAdminRoutingModule,
 
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class PortfolioModule { }
