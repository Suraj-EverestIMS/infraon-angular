import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketManagementComponent } from './ticket-management.component';

const routes: Routes = [{ path: '', component: TicketManagementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketManagementRoutingModule { }
