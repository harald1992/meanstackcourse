import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCreateComponent } from './pages/posts/post-create/post-create.component';
import { CardComponent } from './Generic Components/card/card.component';
import { PostsComponent } from './pages/posts/posts.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './Generic Components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    CardComponent,
    PostsComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
