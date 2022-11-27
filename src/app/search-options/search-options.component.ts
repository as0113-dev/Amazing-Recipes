import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-options',
  templateUrl: './search-options.component.html',
  styleUrls: ['./search-options.component.css']
})
export class SearchOptionsComponent implements OnInit {
  recipesListSubscribe: Subscription = new Subscription;
  @Output() searchValue: EventEmitter<string> = new EventEmitter<string>();

  searchForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      "searchBar": new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    if (this.searchForm.invalid) {
      console.log('INVALID FORM');
    }
    const search = this.searchForm.get('searchBar')?.value;
    if (search) {
      console.log(search);
      this.searchValue.emit(search);
    }

  }

}
