import {Component, OnInit} from '@angular/core';
import {CarService} from "../../service";
import {ICar} from "../../interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {elementAt} from "rxjs";

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
      brand: new FormControl(null, [Validators.pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/)]),
      price:new FormControl(null, [Validators.min(0), Validators.max(1000000000)]),
      year: new FormControl(null,[Validators.min(1990), Validators.max(new Date().getFullYear())])
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

  deleteCarById(id:number):void {
    this.carService.deleteById(id).subscribe(()=>{
      this._getCars()
      console.log("delete")
    })
  }
}
