import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface GitUserInfo  {
    name : string;
    avatar_url : string;
}

@Component({
    selector: 'st-gituserinfo',
    templateUrl: 'gituserinfo.component.html'
})
export class GitUserInfoComponent {
    gituser : GitUserInfo = {name : '', avatar_url : ''};

    URL = "https://api.github.com/users/"
    constructor(private http : HttpClient) { }

    getUserInfo(uname : string) {
         console.log(uname)     
         this.http.get<GitUserInfo>(this.URL +  uname)
                  .subscribe( data => {
                      this.gituser.name = data.name;
                      this.gituser.avatar_url = data.avatar_url;
                  })

    }
}