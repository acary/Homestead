import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Subject, catchError, throwError, tap } from "rxjs";
import { Idea } from "./idea.model";

@Injectable({ providedIn: 'root' })
export class IdeaService {
    error = new Subject<string>();

    constructor(private http: HttpClient) { }

    addIdea({ ideaName, notes, priority, tags }: Idea) {
        const ideaData: Idea = { ideaName: ideaName, notes: notes, priority: priority, tags: tags };
        this.http.post<{ name: string }>('https://homestead-ng-default-rtdb.firebaseio.com/ideas.json',
            ideaData,
            {
                observe: 'response'
            })
            .subscribe(
                (response) => {
                    console.log(response.status + ': ' + response.statusText);
                },
                (error) => {
                    this.error.next(error.message);
                }
            );
    }

    getIdeas() {
        let searchParams = new HttpParams();
        searchParams = searchParams.append('print', 'pretty');

        return this.http
            .get<{ [key: string]: Idea }>('https://homestead-ng-default-rtdb.firebaseio.com/ideas.json',
                {
                    headers: new HttpHeaders({ 'Custom-Header': 'Angular Rocks!' }),
                    params: searchParams,
                    responseType: 'json'
                }
            )
            .pipe(
                map(response => {
                    const ideasArray: Idea[] = [];
                    for (const key in response) {
                        if (response.hasOwnProperty(key)) {
                            ideasArray.push({ ...response[key], id: key });
                        }
                    }
                    return ideasArray;
                }),
                catchError(errorRes => {
                    // Send to analytics server
                    return throwError(errorRes);
                })
            );
    }

    deleteIdeas() {
        return this.http
            .delete('https://homestead-ng-default-rtdb.firebaseio.com/ideas.json',
                {
                    observe: 'events',
                    responseType: 'json'
                }
            ).pipe(tap(event => {
                // console.log(event);
                if (event.type === HttpEventType.Sent) {
                    // console.log('Request sent!');
                }
                if (event.type == HttpEventType.Response) {
                    console.log(event.status + ': ' + event.statusText);
                }
            })
            );
    }
}