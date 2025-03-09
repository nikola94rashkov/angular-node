import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterOutlet } from '@angular/router';
import { HocModule } from '@components/hoc/hoc.module';
import { PostsModule } from '@components/posts/posts.module';
import { SharedModule } from '@components/shared/shared.module';
import { ArticlesModule } from '@components/views/articles/articles.module';
import { CreatePostModule } from '@components/views/create-post/create-post.module';
import { DashboardModule } from '@components/views/dashboard/dashboard.module';
import { EditPostModule } from '@components/views/edit-post/edit-post.module';
import { HomeModule } from '@components/views/home/home.module';
import { LoginModule } from '@components/views/login/login.module';
import { PageNotFoundModule } from '@components/views/page-not-found/page-not-found.module';
import { RegisterModule } from '@components/views/register/register.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    ArticlesModule,
    CreatePostModule,
    EditPostModule,
    DashboardModule,
    HomeModule,
    LoginModule,
    PageNotFoundModule,
    RegisterModule,
    RouterOutlet,
    HocModule,
    PostsModule,
    SharedModule,
  ],
})
export class AppModule {}
