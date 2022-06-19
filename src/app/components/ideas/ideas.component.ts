import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';

import { Idea } from './idea.model';
import { IdeaService } from './idea.service';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
export class IdeasComponent implements OnInit {
  loadedIdeas: Idea[] = [];
  isFetching = false;
  ideaForm: FormGroup;
  isSubmitted: boolean = false;
  forbiddenIdeaNames: any = ['skydive', 'bungee jump', 'crowdsurf'];
  submittedIdea: any = {
    'ideaName': '',
    'notes': '',
    'priority': '',
    'tags': []
  };
  error = null;

  constructor(
    private http: HttpClient,
    private ideaService: IdeaService
  ) { }

  ngOnInit(): void {
    this.ideaForm = new FormGroup({
      'ideaData': new FormGroup({
        'ideaName': new FormControl(null, [Validators.required, this.forbiddenIdeas.bind(this)]),
        'notes': new FormControl('', [Validators.required], this.forbiddenNotes.bind(this)),
        'priority': new FormControl('low'),
        'tags': new FormArray([])
      })
    });

    this.fetchIdeas();
  }

  onSubmit() {
    this.isSubmitted = true;
    // console.log(this.ideaForm.value);

    this.submittedIdea = {
      'ideaName': this.ideaForm.get('ideaData.ideaName').value,
      'notes': this.ideaForm.get('ideaData.notes').value,
      'priority': this.ideaForm.get('ideaData.priority').value,
      'tags': this.ideaForm.get('ideaData.tags').value
    };

    this.ideaService.addIdea(this.submittedIdea);

    this.ideaForm.reset();
  }

  getControls() {
    return (this.ideaForm.get('ideaData.tags') as FormArray).controls;
  }

  onAddTag() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.ideaForm.get('ideaData.tags')).push(control);
  }

  forbiddenIdeas(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenIdeaNames.indexOf(control.value) !== -1) {
      return { 'ideaIsForbidden': true };
    }
    return null;
  }

  forbiddenNotes(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test') {
          resolve({ 'notesIsForbidden': true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  private fetchIdeas() {
    this.isFetching = true;
    this.ideaService.getIdeas().subscribe(
      (ideas: Idea[]) => {
        this.isFetching = false;
        this.loadedIdeas = ideas;
      }, error => {
        this.isFetching = false;
        this.error = error.message;
      }
    );
  }

  private clearIdeas() {
    this.ideaService.deleteIdeas().subscribe(
      () => {
        this.loadedIdeas = [];
      }, error => {
        this.isFetching = false;
        this.error = error.message;
      }
    );
  }
}