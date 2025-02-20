import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '@pp/shared/header/header.component';
import { TableComponent } from '@pp/shared/table/table.component';

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [TableComponent, HeaderComponent],
  templateUrl: './hotel-list.component.html',
  styleUrl: './hotel-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelListComponent {
  columns = [
    { header: 'Image' },
    { header: 'Nombre' },
    { header: 'Direccion' },
    { header: 'Opciones'}
  ];
}
