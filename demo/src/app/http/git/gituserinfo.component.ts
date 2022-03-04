import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay, finalize } from 'rxjs/operators';

interface GitUserInfo {
    name: string;
    avatar_url: string;
}

@Component({
    selector: 'st-gituserinfo',
    templateUrl: 'gituserinfo.component.html'
})
export class GitUserInfoComponent {
    gituser: GitUserInfo = { name: '', avatar_url: '' };
    message: string = "";
    process: boolean = false;

    URL = "https://api.github.com/users/"
    constructor(private http: HttpClient) { }

    getUserInfo(uname: string) {
        this.message = "";
        this.process = true;
        this.http.get<GitUserInfo>(this.URL + uname)
            .pipe
            (
                finalize( () => this.process = false)
            )
            .subscribe(
                {
                    next: data => {
                        this.gituser.name = data.name;
                        this.gituser.avatar_url = data.avatar_url;
                    },
                    error: errorObject => {
                        this.message = errorObject.error.message;
                    }
                }
            ) // subscribe
    }// getUserInfo
} // Component 