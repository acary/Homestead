import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
export class IdeasComponent implements OnInit {
  ideaForm: FormGroup;
  isSubmitted: boolean = false;
  submittedIdea: any = {
    'ideaName': '',
    'notes': '',
    'priority': ''
  };

  constructor() { }

  ngOnInit(): void {
    this.ideaForm = new FormGroup({
      'ideaData': new FormGroup({
        'ideaName': new FormControl('', Validators.required),
        'notes': new FormControl('', [Validators.required]),
        'priority': new FormControl('low')
      })
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    console.log(this.ideaForm.value);
    this.submittedIdea = {
      'ideaName': this.ideaForm.get('ideaData.ideaName').value,
      'notes': this.ideaForm.get('ideaData.notes').value,
      'priority': this.ideaForm.get('ideaData.priority').value
    };
  }

}
