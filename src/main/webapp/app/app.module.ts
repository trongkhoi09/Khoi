import './vendor.ts';

import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { AvonnivSharedModule, UserRouteAccessService } from './shared';
import { AvonnivHomeModule } from './home/home.module';
import { AvonnivAdminModule } from './admin/admin.module';
import { AvonnivAccountModule } from './account/account.module';
import { AvonnivEntityModule } from './entities/entity.module';
import { AvonnivGrantsModule } from './grants/grants.module';
import {AvonnivGrantEditModule} from './grant-edit/grant-edit.module';
import {AvonnivGrantProgramEditModule} from './grant-program-edit/grant-program-edit.module';
import {AvonnivSearchModule} from './search/search.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';
import {MissingTranslationHandler} from 'ng2-translate';
import {missingTranslationHandler} from './blocks/interceptor/translation.interceptor';
import {ConfigService} from 'ng-jhipster/src/config.service';

import {
    JhiMainComponent,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';
import {DescriptionGrantSchoolModalComponent} from './home';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        AvonnivSharedModule,
        AvonnivHomeModule,
        AvonnivSearchModule,
        AvonnivAdminModule,
        AvonnivAccountModule,
        AvonnivEntityModule,
        AvonnivGrantsModule,
        AvonnivGrantEditModule,
        AvonnivGrantProgramEditModule,
        FormsModule,
        NgbModule.forRoot()
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent,
        DescriptionGrantSchoolModalComponent
    ],
    entryComponents: [
        DescriptionGrantSchoolModalComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService,
        {
            provide: MissingTranslationHandler,
            useFactory: missingTranslationHandler,
            deps: [ConfigService]
        }
    ],
    bootstrap: [ JhiMainComponent ]
})
export class AvonnivAppModule {}
