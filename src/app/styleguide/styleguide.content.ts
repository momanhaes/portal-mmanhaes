import {
  IStyleguideButton,
  IStyleguideCollapsibleSection,
  IStyleguideColor,
  IStyleguideCountryIcon,
  IStyleguideIcon,
  IStyleguideInput,
  IStyleguideItem,
  IStyleguidePipe,
  IStyleguideRoute,
  IStyleguideTypography,
} from '../shared/interfaces/styleguide.interface';

import { EMasks } from '../customer/customer.content';

export const LOREM_IPSUM = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

export const ROUTES: IStyleguideRoute[] = [
  {
    route: '/styleguide/typography',
    icon: 'format_size',
    label: 'Typography',
  },
  {
    route: '/styleguide/colors',
    icon: 'format_paint',
    label: 'Colors',
  },
  {
    route: '/styleguide/inputs',
    icon: 'keyboard',
    label: 'Inputs',
  },
  {
    route: '/styleguide/buttons',
    icon: 'toggle_on',
    label: 'Buttons',
  },
  {
    route: '/styleguide/items',
    icon: 'view_list',
    label: 'Items',
  },
  {
    route: '/styleguide/icons',
    icon: 'mood',
    label: 'Icons',
  },
  {
    route: '/styleguide/pipes',
    icon: 'paid',
    label: 'Pipes',
  },
];

export const BUTTONS: IStyleguideButton[] = [
  {
    theme: 'primary',
    label: 'Primary Icon',
    disabled: false,
    code: '<app-button theme="primary" label="Primary Icon" [icon]="mood"></app-button>',
    icon: 'mood',
  },
  {
    theme: 'primary',
    label: 'Primary',
    disabled: false,
    code: '<app-button theme="primary" label="Primary"></app-button>',
  },
  {
    theme: 'basic',
    label: 'Basic Icon',
    disabled: false,
    code: '<app-button theme="basic" label="Basic Icon" [icon]="mood"></app-button>',
    icon: 'mood',
  },
  {
    theme: 'basic',
    label: 'Basic',
    disabled: false,
    code: '<app-button theme="basic" label="Basic"></app-button>',
  },
  {
    theme: 'accent',
    label: 'Accent Icon',
    disabled: false,
    code: '<app-button theme="accent" label="Accent Icon" [icon]="mood"></app-button>',
    icon: 'mood',
  },
  {
    theme: 'accent',
    label: 'Accent',
    disabled: false,
    code: '<app-button theme="accent" label="Accent"></app-button>',
  },
  {
    theme: 'warn',
    label: 'Warn Icon',
    disabled: false,
    code: '<app-button theme="warn" label="Warn Icon" [icon]="mood"></app-button>',
    icon: 'mood',
  },
  {
    theme: 'warn',
    label: 'Warn',
    disabled: false,
    code: '<app-button theme="warn" label="Warn"></app-button>',
  },
  {
    theme: 'outline',
    label: 'Outline Icon',
    disabled: false,
    code: '<app-button theme="outline" label="Outline Icon" [icon]="mood"></app-button>',
    icon: 'mood',
  },
  {
    theme: 'outline',
    label: 'Outline',
    disabled: false,
    code: '<app-button theme="outline" label="Outline"></app-button>',
  },
  {
    theme: 'primary-disabled',
    label: 'Primary Disabled',
    disabled: true,
    code: '<app-button theme="primary-disabled" label="Primary Disabled" [disabled]="true"></app-button>',
  },
  {
    theme: 'outline',
    label: 'Outline Disabled',
    disabled: true,
    code: '<app-button theme="outline" label="Outline Disabled" [disabled]="true"></app-button>',
  },
];

export const COLLAPSIBLES_SECTIONS: IStyleguideCollapsibleSection[] = [
  {
    name: 'Collapsible Primary',
    theme: 'primary',
    code: '<app-collapsible theme="primary" [group]="false"></app-collapsible>',
    collapsibles: [
      {
        header: 'Clique aqui!',
        content: LOREM_IPSUM,
        group: false,
      },
      {
        header: 'Clique aqui!',
        content: LOREM_IPSUM,
        group: false,
      },
    ],
  },
  {
    name: 'Collapsible Primary Group',
    theme: 'primary',
    code: '<app-collapsible theme="primary" [group]="true"></app-collapsible>',
    collapsibles: [
      {
        header: 'Clique aqui!',
        content: LOREM_IPSUM,
        group: true,
      },
      {
        header: 'Clique aqui!',
        content: LOREM_IPSUM,
        group: true,
      },
    ],
  },
  {
    name: 'Collapsible',
    theme: 'outline',
    code: '<app-collapsible theme="outline" [group]="false"></app-collapsible>',
    collapsibles: [
      {
        header: 'Clique aqui!',
        content: LOREM_IPSUM,
        group: false,
      },
      {
        header: 'Clique aqui!',
        content: LOREM_IPSUM,
        group: false,
      },
    ],
  },
];

export const COLORS: IStyleguideColor[] = [
  {
    name: 'color-primary',
    hex: '#1da1f2',
  },
  {
    name: 'color-secondary',
    hex: '#bbdefb',
  },
  {
    name: 'color-terciery',
    hex: '#657786',
  },
  {
    name: 'color-primary-hover',
    hex: '#2196f3',
  },
  {
    name: 'color-secondary-bg',
    hex: '#e1e8ed / #141d26',
  },
  {
    name: 'color-background',
    hex: '#f5f8fa / #14171a',
  },
  {
    name: 'color-white',
    hex: '#ffffff',
  },
  {
    name: 'color-black',
    hex: '#000000',
  },
  {
    name: 'color-green',
    hex: '#28c18d',
  },
  {
    name: 'color-red',
    hex: '#d23b3b',
  },
  {
    name: 'color-danger',
    hex: '#e73f5d',
  },
  {
    name: 'color-yellow',
    hex: '#f9cc54',
  },
  {
    name: 'color-blue',
    hex: '#457ff0',
  },
  {
    name: 'color-grey',
    hex: '#717171',
  },
];

export const ICONS: IStyleguideIcon[] = [
  {
    name: 'Loading',
    id: '',
    code: '<app-spinner [size]="1.3"></app-spinner>',
    label: '',
    isLoading: true,
  },
  {
    name: '',
    id: '',
    code: '<app-spinner label="Carregando..."></app-spinner>',
    label: 'Carregando...',
    isLoading: true,
  },
  {
    name: 'Typography',
    id: 'format_size',
    code: '<mat-icon>format_size</mat-icon>',
  },
  {
    name: 'Colors',
    id: 'format_paint',
    code: '<mat-icon>format_paint</mat-icon>',
  },
  {
    name: 'Inputs',
    id: 'keyboard',
    code: '<mat-icon>keyboard</mat-icon>',
  },
  {
    name: 'Buttons',
    id: 'toggle_on',
    code: '<mat-icon>toggle_on</mat-icon>',
  },
  {
    name: 'Tables',
    id: 'table_chart',
    code: '<mat-icon>table_chart</mat-icon>',
  },
  {
    name: 'Items',
    id: 'view_list',
    code: '<mat-icon>view_list</mat-icon>',
  },
  {
    name: 'Icons',
    id: 'mood',
    code: '<mat-icon>mood</mat-icon>',
  },
  {
    name: 'Pipes',
    id: 'paid',
    code: '<mat-icon>paid</mat-icon>',
  },
  {
    name: 'Home',
    id: 'home',
    code: '<mat-icon>home</mat-icon>',
  },
];

export const COUNTRIES: IStyleguideCountryIcon[] = [
  {
    name: 'Catar',
    icon: 'assets/countries/catar.png',
    code: '<img src="assets/countries/catar.png">',
  },
  {
    name: 'Equador',
    icon: 'assets/countries/equador.png',
    code: '<img src="assets/countries/equador.png">',
  },
  {
    name: 'Senegal',
    icon: 'assets/countries/senegal.png',
    code: '<img src="assets/countries/senegal.png">',
  },
  {
    name: 'Países Baixos',
    icon: 'assets/countries/paises-baixos.png',
    code: '<img src="assets/countries/paises-baixos.png">',
  },
  {
    name: 'Inglaterra',
    icon: 'assets/countries/inglaterra.png',
    code: '<img src="assets/countries/inglaterra.png">',
  },
  {
    name: 'Irã',
    icon: 'assets/countries/ira.png',
    code: '<img src="assets/countries/ira.png">',
  },
  {
    name: 'Estados Unidos',
    icon: 'assets/countries/estados-unidos.png',
    code: '<img src="assets/countries/estados-unidos.png">',
  },
  {
    name: 'País de Gales',
    icon: 'assets/countries/pais-de-gales.png',
    code: '<img src="assets/countries/pais-de-gales.png">',
  },
  {
    name: 'Argentina',
    icon: 'assets/countries/argentina.png',
    code: '<img src="assets/countries/argentina.png">',
  },
  {
    name: 'Arábia Saudita',
    icon: 'assets/countries/arabia-saudita.png',
    code: '<img src="assets/countries/arabia-saudita.png">',
  },
  {
    name: 'México',
    icon: 'assets/countries/mexico.png',
    code: '<img src="assets/countries/mexico.png">',
  },
  {
    name: 'Polônia',
    icon: 'assets/countries/polonia.png',
    code: '<img src="assets/countries/polonia.png">',
  },
  {
    name: 'França',
    icon: 'assets/countries/franca.png',
    code: '<img src="assets/countries/franca.png">',
  },
  {
    name: 'Austrália',
    icon: 'assets/countries/australia.png',
    code: '<img src="assets/countries/australia.png">',
  },
  {
    name: 'Dinamarca',
    icon: 'assets/countries/dinamarca.png',
    code: '<img src="assets/countries/dinamarca.png">',
  },
  {
    name: 'Tunísia',
    icon: 'assets/countries/tunisia.png',
    code: '<img src="assets/countries/tunisia.png">',
  },
  {
    name: 'Espanha',
    icon: 'assets/countries/espanha.png',
    code: '<img src="assets/countries/espanha.png">',
  },
  {
    name: 'Costa Rica',
    icon: 'assets/countries/costa-rica.png',
    code: '<img src="assets/countries/costa-rica.png">',
  },
  {
    name: 'Alemanha',
    icon: 'assets/countries/alemanha.png',
    code: '<img src="assets/countries/alemanha.png">',
  },
  {
    name: 'Japão',
    icon: 'assets/countries/japao.png',
    code: '<img src="assets/countries/japao.png">',
  },
  {
    name: 'Bélgica',
    icon: 'assets/countries/belgica.png',
    code: '<img src="assets/countries/belgica.png">',
  },
  {
    name: 'Canadá',
    icon: 'assets/countries/canada.png',
    code: '<img src="assets/countries/canada.png">',
  },
  {
    name: 'Marrocos',
    icon: 'assets/countries/marrocos.png',
    code: '<img src="assets/countries/marrocos.png">',
  },
  {
    name: 'Croácia',
    icon: 'assets/countries/croacia.png',
    code: '<img src="assets/countries/croacia.png">',
  },
  {
    name: 'Brasil',
    icon: 'assets/countries/brasil.png',
    code: '<img src="assets/countries/brasil.png">',
  },
  {
    name: 'Sérvia',
    icon: 'assets/countries/servia.png',
    code: '<img src="assets/countries/servia.png">',
  },
  {
    name: 'Suíça',
    icon: 'assets/countries/suica.png',
    code: '<img src="assets/countries/suica.png">',
  },
  {
    name: 'Camarões',
    icon: 'assets/countries/camaroes.png',
    code: '<img src="assets/countries/camaroes.png">',
  },
  {
    name: 'Portugal',
    icon: 'assets/countries/portugal.png',
    code: '<img src="assets/countries/portugal.png">',
  },
  {
    name: 'Gana',
    icon: 'assets/countries/gana.png',
    code: '<img src="assets/countries/gana.png">',
  },
  {
    name: 'Uruguai',
    icon: 'assets/countries/uruguai.png',
    code: '<img src="assets/countries/uruguai.png">',
  },
  {
    name: 'Coreia do Sul',
    icon: 'assets/countries/coreia-do-sul.png',
    code: '<img src="assets/countries/coreia-do-sul.png">',
  },
];

export const INPUTS: IStyleguideInput[] = [
  {
    name: 'Standard',
    code: '<app-input [form]="form" type="text" label="Padrão" control="input" [required]="false" [disabled]="false" placeholder="Input padrão"></app-input>',
    label: 'Padrão',
    type: 'text',
    control: 'input',
    required: false,
    disabled: false,
    placeholder: 'Input padrão',
    mask: '',
  },
  {
    name: 'Required',
    code: '<app-input [form]="form" type="text" label="Required" control="required" [required]="true" [disabled]="false" placeholder="Input required"></app-input>',
    label: 'Required',
    type: 'text',
    control: 'required',
    required: true,
    disabled: false,
    placeholder: 'Input required',
    mask: '',
  },
  {
    name: 'Disabled',
    code: '<app-input [form]="form" type="text" label="Disabled" control="disabled" [required]="false" [disabled]="true" placeholder="Input disabled"></app-input>',
    label: 'Disabled',
    type: 'text',
    control: 'disabled',
    required: false,
    disabled: true,
    placeholder: 'Input disabled',
    mask: '',
  },
  {
    name: 'Email',
    code: '<app-input [form]="form" type="text" label="Email" control="email" [required]="false" [disabled]="false" placeholder="Input email"></app-input>',
    label: 'Email',
    type: 'email',
    control: 'email',
    required: false,
    disabled: false,
    placeholder: 'Input email',
    mask: '',
  },
  {
    name: 'Search',
    code: '<app-input [form]="form" type="text" label="Search" control="search" [required]="false" [disabled]="false" placeholder="Input search"></app-input>',
    label: 'Search',
    type: 'text',
    control: 'search',
    required: false,
    disabled: false,
    placeholder: 'Input search',
    isSearch: true,
    mask: '',
  },
  {
    name: 'Password',
    code: '<app-input [form]="form" type="password" label="Password" control="password" [disabled]="false" [required]="false" placeholder="Input password"></app-input>',
    label: 'Password',
    type: 'password',
    control: 'password',
    required: false,
    disabled: false,
    placeholder: 'Input password',
    mask: '',
  },
  {
    name: 'CPF',
    code: '<app-input [form]="form" type="text" label="CPF" control="cpf" [required]="false" [disabled]="false" placeholder="Input CPF" mask="000.000.000-00"></app-input>',
    label: 'CPF',
    type: 'text',
    control: 'cpf',
    required: false,
    disabled: false,
    placeholder: 'Input CPF',
    isSearch: false,
    mask: EMasks.CPF,
  },
  {
    name: 'CNPJ',
    code: '<app-input [form]="form" type="text" label="CNPJ" control="cnpj" [required]="false" [disabled]="false" placeholder="Input CNPJ" mask="00.000.000/0000-00"></app-input>',
    label: 'CNPJ',
    type: 'text',
    control: 'cnpj',
    required: false,
    disabled: false,
    placeholder: 'Input CNPJ',
    isSearch: false,
    mask: EMasks.CNPJ,
  },
  {
    name: 'Data de Nascimento',
    code: '<app-input [form]="form" type="text" label="Data de nascimento" control="birth" [required]="false" [disabled]="false" placeholder="Input data de nascimento" mask="00/00/0000"></app-input>',
    label: 'Data de nascimento',
    type: 'text',
    control: 'birth',
    required: false,
    disabled: false,
    placeholder: 'Input data de nascimento',
    isSearch: false,
    mask: EMasks.BIRTH,
  },
  {
    name: 'Celular',
    code: '<app-input [form]="form" type="text" label="Celular" control="cel" [required]="false" [disabled]="false" placeholder="Input celular" mask="(00) 00000-0000"></app-input>',
    label: 'Celular',
    type: 'text',
    control: 'cel',
    required: false,
    disabled: false,
    placeholder: 'Input celular',
    isSearch: false,
    mask: EMasks.CEL,
  },
];

export const ITEMS: IStyleguideItem[] = [
  {
    label: 'Standard',
    value: 'Valor sem formatação',
    type: 'standard',
    code: '<app-item label="Standard" value="Valor sem formatação" type="standard"></app-item>',
  },
  {
    label: 'Currency',
    value: '1000',
    type: 'currency',
    code: '<app-item label="Currency" value="1000" type="currency"></app-item>',
  },
  {
    label: 'CPF',
    value: '99999999999',
    type: 'cpf',
    code: '<app-item label="CPF" value="99999999999" type="cpf"></app-item>',
  },
  {
    label: 'CNPJ',
    value: '99999999999999',
    type: 'cnpj',
    code: '<app-item label="CNPJ" value="99999999999999" type="cnpj"></app-item>',
  },
  {
    label: 'Account',
    value: 1234180343,
    type: 'account',
    code: '<app-item label="Account" value="1234180343" type="account"></app-item>',
  },
  {
    label: 'Percentage',
    value: 0.1,
    type: 'percent',
    code: '<app-item label="Percentage" value="0.1" type="percent"></app-item>',
  },
];

export const PIPES: IStyleguidePipe[] = [
  {
    name: 'CPF',
    type: 'cpf',
    value: '99999999999',
    usage: `{{ cpf | cpf }}`,
  },
  {
    name: 'CNPJ',
    type: 'cnpj',
    value: '99999999999999',
    usage: `{{ cnpj | cnpj }}`,
  },
  {
    name: 'Currency',
    type: 'currency',
    value: 5000,
    usage: `{{ currency | currency: "BRL":"symbol" }}`,
  },
  {
    name: 'Date',
    type: 'date',
    value: '1995-07-11T20:14:00.345Z',
    usage: `{{ date | date:"MM/dd/yyyy" }}`,
  },
  {
    name: 'Percent',
    type: 'percent',
    value: 0.1,
    usage: `{{ percent | percent }}`,
  },
  {
    name: 'Account',
    type: 'account',
    value: 1234180343,
    usage: `{{ account | account }}`,
  },
  {
    name: 'CEP',
    type: 'cep',
    value: 99999999,
    usage: `{{ cep | cep }}`,
  },
  {
    name: 'Cel',
    type: 'cel',
    value: 21999999999,
    usage: `{{ cel | cel }}`,
  },
  {
    name: 'Tel',
    type: 'tel',
    value: 2199999999,
    usage: `{{ tel | tel }}`,
  },
];

export const TYPOGRAPHY: IStyleguideTypography[] = [
  {
    name: 'Título',
    code: '<h1 class="title">Título</h1>',
    id: 'typo-title',
  },
  {
    name: 'H1',
    code: '<h1>H1</h1>',
    id: 'typo-h1',
  },
  {
    name: 'H2',
    code: '<h2>H2</h2>',
    id: 'typo-h2',
  },
  {
    name: 'H3',
    code: '<h3>H3</h3>',
    id: 'typo-h3',
  },
  {
    name: 'H4',
    code: '<h4>H4</h4>',
    id: 'typo-h4',
  },
  {
    name: 'H5',
    code: '<h5>H5</h5>',
    id: 'typo-h5',
  },
  {
    name: 'H6',
    code: '<h6>H6</h6>',
    id: 'typo-h6',
  },
  {
    name: 'Span',
    code: '<span>Span</span>',
    id: 'typo-span',
  },
  {
    name: 'Parágrafo',
    code: '<p>Parágrafo</p>',
    id: 'typo-p',
  },
  {
    name: 'Link',
    code: '<a href="https://mmanhaes.com.br" target="_blank">Link</a>',
    id: 'typo-link',
  },
];
