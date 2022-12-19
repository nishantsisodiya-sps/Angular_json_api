import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { CommentsComponent } from './components/comments/comments.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiServiceService } from './myservice/api-service.service';
import {MatCardModule} from '@angular/material/card';
import { AllUsersComponent } from './components/sidenav/comps/all-users/all-users.component';
import { AllCommentsComponent } from './components/sidenav/comps/all-comments/all-comments.component';

const appRouts : Routes=[
  {path: '', pathMatch:'full' , redirectTo:'users'},
  {path:'users', component:UsersComponent },
  {path:'allPosts', component:AllUsersComponent},
  {path:'allComments', component:AllCommentsComponent},
  {path:'posts/: id', component:PostsComponent},
  {path:'comments/: id', component:CommentsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    CommentsComponent,
    AllUsersComponent,
    AllCommentsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    NgbModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    RouterModule.forRoot(appRouts),
    HttpClientModule,
    MatCardModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
