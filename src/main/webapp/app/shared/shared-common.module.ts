import { NgModule } from '@angular/core';

import { CadcSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [CadcSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    providers: [],
    exports: [CadcSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class CadcSharedCommonModule {}
