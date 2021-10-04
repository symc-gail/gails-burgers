import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Burger } from 'src/app/_interfaces/burger';

@Component({
  selector: 'app-burger-type',
  templateUrl: './burger-type.component.html',
  styleUrls: ['./burger-type.component.scss']
})
export class BurgerTypeComponent implements OnInit {
  @Input() burger!: Burger;

  constructor(private _snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar() {
    this._snackbar.open(`You ordered ${this.burger?.name}!`, undefined, {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}
