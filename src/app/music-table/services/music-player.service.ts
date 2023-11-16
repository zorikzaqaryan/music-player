import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TrackDto } from "../../shared/track-dto";

@Injectable({
  providedIn: 'root'
})
export class MusicPlayerService {
  private audio: HTMLAudioElement | null = null;
  private isPlayingSubject = new Subject<boolean>();

  private sounds : TrackDto[] = [
    {id: 1, name: 'Clean success', fileName: 'Clean-success.mp3'},
    {id: 2, name: 'Motivation for success', fileName: 'Motivation-for-success.mp3'},
    {id: 3, name: 'The greatest will', fileName: 'The-greatest-will.mp3'},
    {id: 4, name: 'Wings of inspiration', fileName: 'Wings-of-inspiration.mp3'}
  ];

  public getSounds (): any[] {
    return this.sounds;
  }

  public play (url: string): void {
    this.stop();
    if (!this.audio) {
      this.audio = new Audio();
    }
    this.audio.src = url;
    this.isPlayingSubject.next(true);
  }

  public stop (): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.isPlayingSubject.next(false);
    }
  }
}
