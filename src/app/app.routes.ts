import { Routes } from '@angular/router';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';

export const routes: Routes = [
    {
        path:'', component:Test1Component, title:'home page',
    },
    {
        path:'test2', component:Test2Component, title:'test2',
    
    }
]; 

export default routes;