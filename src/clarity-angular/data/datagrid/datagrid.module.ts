/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClrIconModule } from "../../icon/icon.module";
import { ClrFormsModule } from "../../forms/forms.module";
import { FormsModule } from "@angular/forms";
import { ClrCommonPopoverModule } from "../../popover/common/popover.module";
import { ClrLoadingModule } from "../../utils/loading/loading.module";
import { DATAGRID_DIRECTIVES } from "./index";

@NgModule({
    imports: [
        CommonModule,
        ClrIconModule,
        ClrFormsModule,
        FormsModule,
        ClrCommonPopoverModule,
        ClrLoadingModule
    ],
    declarations: [
        DATAGRID_DIRECTIVES,
    ],
    exports: [
        DATAGRID_DIRECTIVES
    ]
})
export class ClrDatagridModule {}
