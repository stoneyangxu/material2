import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import {MdDatepicker} from './datepicker';
import {MdDatepickerIntl} from './datepicker-intl';


@Component({
  moduleId: module.id,
  selector: 'button[mdDatepickerToggle], button[matDatepickerToggle]',
  template: '',
  styleUrls: ['datepicker-toggle.css'],
  host: {
    '[attr.type]': 'type',
    '[class.mat-datepicker-toggle]': 'true',
    '[attr.aria-label]': '_intl.openCalendarLabel',
    '(click)': '_open($event)',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdDatepickerToggle<D> {
  /** Datepicker instance that the button will toggle. */
  @Input('mdDatepickerToggle') datepicker: MdDatepicker<D>;

  /** Type of the button. */
  @Input() type: string = 'button';

  @Input('matDatepickerToggle')
  get _datepicker() { return this.datepicker; }
  set _datepicker(v: MdDatepicker<D>) { this.datepicker = v; }

  constructor(public _intl: MdDatepickerIntl) {}

  _open(event: Event): void {
    if (this.datepicker) {
      this.datepicker.open();
      event.stopPropagation();
    }
  }
}
