import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { IPostType } from './IPosts.object';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
	_postsArray: IPostType[];
	_postsArrayPromise: IPostType[];

constructor(private apiService:ApiService) {}
ngOnInit():void {
	this.getPostsUsingObservable();
	this.getPostsUsingPromises();
} 

getPostsUsingObservable(): void {
	this.apiService.getPostsByObservable()
	.subscribe(
		resultArray => this._postsArray = resultArray,
		error => console.log("Error :: " + error)
	);
}

getPostsUsingPromises():void{
	this.apiService.getPostsByPromise()
	.then(articlesItems => this._postsArrayPromise = articlesItems);
	}
}