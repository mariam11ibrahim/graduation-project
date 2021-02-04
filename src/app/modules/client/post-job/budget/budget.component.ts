import { SharingDataService } from './../../shared/services/sharing-data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css'],
})
export class BudgetComponent implements OnInit {
  radioType: string;
  isFixed: boolean = false;
  isByHour: boolean = false;

  budgetForm: FormGroup;
  payment: string;
  // price: number;
  isFixedFormVaild: boolean;
  isHourlyFormVaild: boolean;

  constructor(
    private _formBuilder: FormBuilder,
    private _sharingData: SharingDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.budgetForm = this._formBuilder.group({
      PaymentType: [, [Validators.required]],
      // Price: ['', [Validators.required]],
    });
  }

  print(v: string) {
    console.log(v);
  }

  isChecked(type: string) {
    if (type == 'Pay a fixed price') {
      this.isFixed = true;
      this.isByHour = false;
    }
    if (type == 'Pay by hour') {
      this.isByHour = true;
      this.isFixed = false;
    }
    console.log(`isFixed : ${this.isFixed} -- isByHour : ${this.isByHour}`);
  }

  // isFixed(fixed:boolean){
  //   console.log(`fixed prise ${fixed}`)
  // }

  // settting strat form data
  storeData() {
    const budget = {
      payment: this.budgetForm.controls['PaymentType'].value,
      // price: this.budgetForm.controls['Price'].value,
    };

    this._sharingData.setBudgetData(budget);
    console.log(budget.payment);
    // console.log(budget.price);
    console.log(budget);
    console.log(this.budgetForm);
  }

  //fixed form validation
  FixedValidation(data: any) {
    this.isFixedFormVaild = data;
    console.log(this.isFixedFormVaild);
  }
  // hourly form validation
  HourlyValidation(data: any) {
    this.isHourlyFormVaild = data;
    console.log(this.isHourlyFormVaild);
  }
  //form custome validation
  isBudgetValid() {
    if (
      (this.budgetForm.valid && this.isFixedFormVaild) ||
      (this.budgetForm.valid && this.isHourlyFormVaild)
    ) {
      return true;
    } else return false;
  }
  //store data and navigate to review page
  StoreDataAndNavigate() {
    if (this.isBudgetValid()) {
      this.storeData();
      this.router.navigateByUrl('/review');
    } else console.log('not valid');
  }
}