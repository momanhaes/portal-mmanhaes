// ANGLAR IMPORTS
import { LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

// DECLARATIONS
import { AppComponent } from './app.component';
import { ResizeDirective } from './directives/resize.directive';
import { TableComponent } from './components/table/table.component';
import { InputComponent } from './components/input/input.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ToastyComponent } from './components/toasty/toasty.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReadMoreComponent } from './components/read-more/read-more.component';
import { ToastyListComponent } from './components/toasty-list/toasty-list.component';
import { CollapsibleComponent } from './components/collapsible/collapsible.component';

// PAGES
import { HomeComponent } from './pages/home/home.component';
import { TypographyPageComponent } from './pages/typography-page/typography-page.component';
import { ColorsPageComponent } from './pages/colors-page/colors-page.component';
import { InputsPageComponent } from './pages/inputs-page/inputs-page.component';
import { ButtonsPageComponent } from './pages/buttons-page/buttons-page.component';
import { TablesPageComponent } from './pages/tables-page/tables-page.component';
import { ItemsPageComponent } from './pages/items-page/items-page.component';
import { IconsPageComponent } from './pages/icons-page/icons-page.component';
import { PipesPageComponent } from './pages/pipes-page/pipes-page.component';
import { GitHubSearchComponent } from './pages/gh-search/gh-search.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

// PIPES
import { AccountPipe } from './pipes/account.pipe';
import { CnpjPipe } from './pipes/cnpj.pipe';
import { CpfPipe } from './pipes/cpf.pipe';
import { CepPipe } from './pipes/cep.pipe';
import { CelWithDDDPipe } from './pipes/cel.pipe';
import { TelWithDDDPipe } from './pipes/tel.pipe';

// MATERIAL IMPORTS
import { MatSortModule } from '@angular/material/sort';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ItemComponent } from './components/item/item.component';
import { ListComponent } from './components/list/list.component';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';

// PROVIDERS
import { ToastyService } from './services/toasty.service';
import { WindowService } from './services/window.service';
import { GithubService } from './services/github.service';
import { CollapsibleService } from './services/collapsible.service';
import { NotificationService } from './services/notification.service';
import { SessionStorageService } from './services/session-storage.service';

// INTERNAL IMPORTS
import { ROUTES } from './app.routes';

// LOCALE DEFINITIONS
registerLocaleData(localePt, 'pt');

const PROVIDERS = [
  { provide: LOCALE_ID, useValue: 'pt' },
  SessionStorageService,
  NotificationService,
  CollapsibleService,
  ToastyService,
  WindowService,
  GithubService
];

const DECLARATIONS = [
  AppComponent,
  FooterComponent,
  HeaderComponent,
  SidebarComponent,
  ButtonComponent,
  InputComponent,
  SpinnerComponent,
  ProfileComponent,
  TableComponent,
  ListComponent,
  ItemComponent,
  ResizeDirective,
  ToastyComponent,
  ReadMoreComponent,
  ToastyListComponent,
  CollapsibleComponent,
];

const PAGES = [
  HomeComponent,
  TypographyPageComponent,
  ColorsPageComponent,
  InputsPageComponent,
  ButtonsPageComponent,
  TablesPageComponent,
  ItemsPageComponent,
  IconsPageComponent,
  PipesPageComponent,
  GitHubSearchComponent,
  NotFoundComponent,
];

const PIPES = [
  CpfPipe,
  CnpjPipe,
  AccountPipe,
  CepPipe,
  CelWithDDDPipe,
  TelWithDDDPipe,
];

const ANGULAR_MODULES = [
  BrowserModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  HttpClientModule,
  RouterModule.forRoot(ROUTES),
];

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatMenuModule,
  MatSelectModule,
  MatTooltipModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
];

@NgModule({
  declarations: [...DECLARATIONS, ...PAGES, ...PIPES],
  imports: [...ANGULAR_MODULES, ...MATERIAL_MODULES],
  providers: [...PROVIDERS],
  bootstrap: [AppComponent],
})
export class AppModule {}
