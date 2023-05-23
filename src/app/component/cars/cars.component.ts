import {Component, OnInit} from '@angular/core';
import {CarService} from "../../service";
import {ICar} from "../../interface";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit{
  cars:ICar[];
  form:FormGroup;
  carForUpdate:ICar | null
constructor(private carService: CarService) {
}
ngOnInit():void {
    this._getCars()
    this._initForm()
}

_getCars():void{
  this.carService.getAll().subscribe(value => this.cars = value)

}

_initForm():void{
    this.form = new FormGroup( {
      brand: new FormControl(null),
      price:new FormControl(null),
      year: new FormControl(null)
    })

}


  save():void {
    if(!this.carForUpdate){
      this.carService.create(this.form.getRawValue()).subscribe(()=>{
        this._getCars()
      })
    } else {
      this.carService.updateById(this.carForUpdate.id, this.form.getRawValue()).subscribe(()=>{
        this._getCars()
        this.carForUpdate = null
      })
    }
      this.form.reset()
  }

  getCarForUpdate(car: ICar) {
      this.carForUpdate = car
      this.form.setValue({
        brand:car.brand,
        price:car.price,
        year:car.year
      })
  }
}
