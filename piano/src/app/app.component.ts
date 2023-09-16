import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'piano';

  playSound(number: number) {
    const audio = new Audio()

    audio.src = `../assets/sonidos/note${number}.wav`

    audio.load()

    audio.play()
  }
}
