import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

import { PostsComponent } from './posts/posts.component';
import { ShowComponent } from './posts/show/show.component';
import { EditComponent } from './posts/edit/edit.component';
import { AddComponent } from './posts/add/add.component';
import { DeleteComponent } from './posts/delete/delete.component';
import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    ShowComponent,
    EditComponent,
    AddComponent,
    DeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
