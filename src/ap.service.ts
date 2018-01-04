import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import { IPostType } from './IPosts.object';
@Injectable()
export class ApiService {

private _postsURL = "https://jsonplaceholder.typicode.com/posts";

constructor(private http: Http) { }

getPosts(): Observable<IPostType[]> {
	return this.http.get(this._postsURL)
	.map((response: Response) => {
	return <IPostType[]>response.json();
	});
}

getPostsByPromise(): Promise<IPostType[]> {
	return this.http.get(this._postsURL)
	.toPromise()
	.then((response: Response) => {
	/*console.log("output during GET(promise)" + response.json()); */
	return Promise.resolve(response.json());
	})
	}
}