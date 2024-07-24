import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepService {
  private _next!: Subject<void>;
  private _previous!: Subject<void>;

  @Output() public stopEmmiter = new EventEmitter<boolean>();
  @Output() public isFirstStep = new EventEmitter<boolean>();

  public get getNext(): Observable<void> {
    return this._next.asObservable();
  }

  public get getPrevious(): Observable<void> {
    return this._previous.asObservable();
  }

  public initialize(): void {
    this._next = new Subject<void>();
    this._previous = new Subject<void>();
  }

  public next(): void {
    this._next.next();
  }

  public previous(): void {
    this._previous.next();
  }

  public stop(): void {
    this._next.complete();
    this._previous.complete();
  }
}
