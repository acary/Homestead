import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Subject } from "rxjs";
import { Idea } from "./idea.model";

@Injectable({ providedIn: 'root' })
export class IdeaService {
    error = new Subject<string>();

    constructor(private http: HttpClient) { }

    addIdea({ ideaName, notes, priority, tags }: Idea) {
        const ideaData: Idea = { ideaName: ideaName, notes: notes, priority: priority, tags: tags };
        this.http.post<{ name: string }>('https://homestead-ng-default-rtdb.firebaseio.com/ideas.json', ideaData)
            .subscribe(
                (response) => {
                    console.log(response);
                },
                (error) => {
                    this.error.next(error.message);
                }
            );
    }

    getIdeas() {
        return this.http
            .get<{ [key: string]: Idea }>('https://homestead-ng-default-rtdb.firebaseio.com/ideas.json')
            .pipe(
                map(response => {
                    const ideasArray: Idea[] = [];
                    for (const key in response) {
                        if (response.hasOwnProperty(key)) {
                            ideasArray.push({ ...response[key], id: key });
                        }
                    }
                    return ideasArray;
                })
            );
    }

    deleteIdeas() {
        return this.http
            .delete('https://homestead-ng-default-rtdb.firebaseio.com/ideas.json');
    }
}