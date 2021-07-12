import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    posts = [
    {
        title: "Neat Tree",
        username: "nature",
        content: "Saw this awesome tree during my hike today.",
        imageURL: "assets/tree.jpeg"
    },
    {
        title: "Snowy Mountain",
        username: "mountainlover",
        content: "Here's a picture of a snowy mountain",
        imageURL: "assets/mountain.jpeg"
    },
    {
        title: "Mountain Biking",
        username: "biking12222",
        content: "I did some biking today",
        imageURL: "assets/biking.jpeg"
    },
]
}
