import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PaginationComponent} from './components';

/** Shared Modules */
const SHARED_MODULES = [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    MatButtonModule,
    MatPaginatorModule,
    MatInputModule,
    MatListModule
];

/** Shared Components */
const SHARED_COMPONENTS = [
  PaginationComponent
];

@NgModule({
    imports: [...SHARED_MODULES],
    exports: [...SHARED_MODULES, ...SHARED_COMPONENTS],
    declarations: [...SHARED_COMPONENTS]
})
export class SharedModule { }
