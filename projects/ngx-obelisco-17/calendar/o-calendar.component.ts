import { Component, Input, OnInit } from '@angular/core';
import { ActiveDay, CalendarDate } from 'ngx-obelisco-17/core/models';

@Component({
  selector: 'o-calendar',
  templateUrl: './o-calendar.component.html',
  styleUrls: ['./o-calendar.component.scss'],
})
export class OCalendarComponent implements OnInit {
  @Input() public date!: CalendarDate;
  @Input() public activeDays: ActiveDay[] = [];
  @Input() public isCollapsed: boolean = false;
  @Input() public hasList: boolean = true;
  @Input() public customClasses: string = '';

  public month: number | null = null;
  public year: number | null = null;
  public start: number = 0;
  public MONTH_TITLE = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];
  public DAYS_HEADER_TABLE = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
  public daysArray: number[] = [];
  public emptyDaysArray: any[] = [];
  public firstWeekDays: number = 0;
  public firstWeekDaysArray: number[] = [];
  public weekDaysArray: number[] = [];
  public analizedActiveDays: ActiveDay[] = [];

  //Determina el dia de la semana en que empieza del mes de determinado año
  getStartDayOfMonth(year: number, month: number): number {
    const firstDayOfMonth = new Date(year, month - 1, 1);
    const dayOfWeek = firstDayOfMonth.getDay();
    this.start = dayOfWeek;
    return this.start;
  }

  //Define número de días por mes
  public monthAmountOfDays = (month: number, year?: number): number => {
    if (typeof month !== 'number' || month < 1 || month > 12) {
      return 0;
    }

    if (month === 4 || month === 6 || month === 9 || month === 11) {
      return 30;
    } else if (month === 2) {
      return (year ? year : 2024) % 4 === 0 ? 29 : 28;
    } else {
      return 31;
    }
  };

  //Define texto del mes
  public monthsTitles = (month?: number) => {
    if (month && month >= 1 && month <= 12) {
      return this.MONTH_TITLE[month - 1];
    } else {
      return 'Mes inválido';
    }
  };

  // Genera filas de 7 días cada una
  get weekDaysArrayRows(): { rows: number[][]; counter: number } {
    const rows: number[][] = [];
    const rowSize = 7;
    const arrayLength = this.weekDaysArray.length;
    let counter: number = 0;

    for (let i = 0; i < arrayLength; i += rowSize) {
      rows.push(this.weekDaysArray.slice(i, i + rowSize));
      counter += 1;
    }

    // Se añaden elementos vacios si es necesario para completar la última fila
    const lastChunkLength = rows[rows.length - 1].length;
    if (lastChunkLength < rowSize) {
      const remainingSpecials = rowSize - lastChunkLength;
      for (let i = 0; i < remainingSpecials; i++) {
        rows[rows.length - 1].push(-1);
      }
    }
    return { rows, counter };
  }

  //Evalua si hay numeros de activeDays que coincidan
  isActiveDay(day: number): boolean {
    return !!this.analizedActiveDays?.find(
      (activeDay) => activeDay.day === day
    );
  }

  getActiveDay(day: number): ActiveDay | undefined {
    return this.analizedActiveDays?.find((activeDay) => activeDay.day === day);
  }

  //Convierte array de days en objetos
  convertArrayIntoObject(objeto: any): any[] {
    const dayArray = objeto.day;
    if (Array.isArray(dayArray)) {
      return dayArray.map((day) => ({
        ...objeto,
        day: day,
      }));
    } else {
      return [objeto];
    }
  }

  //Evalua cada activeDay
  generateArrayActiveDays(activeDays: ActiveDay[]): ActiveDay[] | undefined {
    for (const key in activeDays) {
      if (Object.prototype.hasOwnProperty.call(activeDays, key)) {
        const element = activeDays[key];
        if (typeof element.day == 'number') {
          this.analizedActiveDays.push(element);
        } else {
          for (const obj of this.convertArrayIntoObject(element)) {
            this.analizedActiveDays.push(obj);
          }
        }
      }
    }
    return this.analizedActiveDays;
  }

  //Obtiene clase de cada activeDay acorde al type
  getClassByType(type: string | undefined): string {
    if (type == undefined) {
      return 'active';
    } else if (type == 'secondary') {
      return 'active-secondary';
    } else {
      return `active bg-${type}`;
    }
  }

  //Obtiene el tipo de day y lo asigna a la lista
  typeOfDays(day: number | number[] | undefined): string {
    if (!day) {
      return '';
    } else if (typeof day === 'number') {
      return `${day}.`;
    } else {
      if (day.length > 2) {
        return `${day[0]} al ${day[day.length - 1]}.`;
      } else {
        return `${day[0]}, ${day[day.length - 1]}.`;
      }
    }
  }

  constructor() {}

  ngOnInit(): void {
    if (this.date) {
      this.month = this.date.month;
      this.year = this.date.year;
    }

    this.getStartDayOfMonth(this.year!, this.month!);

    this.daysArray = Array.from(
      { length: this.monthAmountOfDays(this.month!, this.year!) },
      (_, index) => index + 1
    );

    this.emptyDaysArray =
      this.start < 7
        ? Array.from({ length: this.start }, (_, index) => ({ key: index }))
        : [];

    this.firstWeekDays = 7 - this.start;

    this.firstWeekDaysArray = this.daysArray.slice(0, this.firstWeekDays);

    this.weekDaysArray = this.daysArray.slice(this.firstWeekDays);

    if (this.activeDays) {
      this.generateArrayActiveDays(this.activeDays);
    }
  }
}
