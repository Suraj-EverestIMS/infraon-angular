import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartnerProgramComponent } from './partner-program.component';

const routes: Routes = [{ path: '', component: PartnerProgramComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnerProgramRoutingModule { }
