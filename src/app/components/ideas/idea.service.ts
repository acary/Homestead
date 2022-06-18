import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Idea } from "./idea.model";

@Injectable({ providedIn: 'root' })
export class IdeaService {
    constructor(private http: HttpClient) { }

    addIdea({ ideaName, notes, priority, tags }: Idea) {
        const ideaData: Idea = { ideaName: ideaName, notes: notes, priority: priority, tags: tags };
        this.http.post<{ name: string }>('https://homestead-ng-default-rtdb.firebaseio.com/ideas.json', ideaData)
            .subscribe(
                (response) => {
                    console.log(response);
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
}