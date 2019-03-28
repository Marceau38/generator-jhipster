import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { App1SharedLibsModule, App1SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [App1SharedLibsModule, App1SharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [App1SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class App1SharedModule {
  static forRoot() {
    return {
      ngModule: App1SharedModule
    };
  }
}
