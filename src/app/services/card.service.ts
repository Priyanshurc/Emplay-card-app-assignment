// card.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../models/card.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private apiUrl = 'http://localhost:3000/cards';

  private cardsSubject = new BehaviorSubject<Card[]>([]);
  public cards$ = this.cardsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadCards(); // Fetch cards initially
  }

  private loadCards(): void {
    this.http.get<Card[]>(this.apiUrl).subscribe(cards => {
      this.cardsSubject.next(cards);
    });
  }

  getCards(): Observable<Card[]> {
    return this.cards$;
  }

  addCard(card: Partial<Card>): void {
    this.http.post<Card>(this.apiUrl, card).subscribe(() => this.loadCards());
  }

  updateCard(card: Card): void {
    this.http.put<Card>(`${this.apiUrl}/${card.id}`, card).subscribe(() => this.loadCards());
  }

  deleteCard(id: number): void {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => this.loadCards());
  }
}
