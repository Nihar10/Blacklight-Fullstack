import { Routes } from '@angular/router';
import { CurrWeekComponent } from './curr-week/curr-week.component';
import { LastWeekComponent } from './last-week/last-week.component';
 
import { UserbyidComponent } from './userbyid/userbyid.component';

export const routes: Routes = [
    { path: '', component: CurrWeekComponent },
    { path: 'currentweek200', component: CurrWeekComponent },
    { path: 'lastweek200', component: LastWeekComponent },
    {path:'ranking',component:UserbyidComponent}

];
