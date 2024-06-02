import { NgModule } from '@angular/core';

import { IconExternalComponent } from './icon-external/icon-external.component';
import { IconLogoComponent } from './icon-logo/icon-logo.component';

@NgModule({
  declarations: [],
  imports: [IconExternalComponent, IconLogoComponent],
  exports: [IconExternalComponent, IconLogoComponent],
})
export class IconsModule {}
