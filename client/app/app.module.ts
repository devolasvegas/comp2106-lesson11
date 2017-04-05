/**
 * Created by devon on 2017-03-29.
 */
// dependencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { GameComponent } from './components/game.component';

@NgModule ({
    declarations: [ GameComponent ],
    imports: [ BrowserModule, HttpModule ],
    providers: [],
    bootstrap: [ GameComponent ]
})

export class AppModule {}